// src/lib/three/particleUtils.ts
import * as THREE from 'three';

export interface ParticleConfig {
  count: number;
  size: number;
  color: THREE.Color;
  separation: number;
  amountX: number;
  amountY: number;
}

export interface ParticleData {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  points: THREE.Points;
}

/**
 * Creates a particle wave system with animated positions
 */
export function createParticleWave(config: Partial<ParticleConfig> = {}): ParticleData {
  const finalConfig: ParticleConfig = {
    count: 2500,
    size: 15,
    color: new THREE.Color(0xD4A574), // Bronze/gold
    separation: 100,
    amountX: 50,
    amountY: 50,
    ...config,
  };

  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const scales: number[] = [];

  let i = 0;
  let j = 0;

  for (let ix = 0; ix < finalConfig.amountX; ix++) {
    for (let iy = 0; iy < finalConfig.amountY; iy++) {
      positions[i] = ix * finalConfig.separation - (finalConfig.amountX * finalConfig.separation) / 2;
      positions[i + 1] = 0;
      positions[i + 2] = iy * finalConfig.separation - (finalConfig.amountY * finalConfig.separation) / 2;

      scales[j] = 1;

      i += 3;
      j++;
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: finalConfig.color },
    },
    vertexShader: `
      attribute float scale;
      varying vec3 vColor;
      uniform vec3 color;
      
      void main() {
        vColor = color;
        vec3 mvPosition = position;
        mvPosition = modelViewMatrix * vec4(mvPosition, 1.0);
        gl_PointSize = scale * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying vec3 vColor;
      
      void main() {
        if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,
    transparent: true,
  });

  const points = new THREE.Points(geometry, material);

  return { geometry, material, points };
}

/**
 * Updates particle positions for wave animation
 */
export function updateParticleWave(
  geometry: THREE.BufferGeometry,
  count: number
): void {
  const positions = geometry.attributes.position.array as Float32Array;
  const time = Date.now() * 0.0005;

  let i = 0;
  let j = 0;

  const amountX = 50;
  const amountY = 50;

  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i + 1] =
        Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;

      i += 3;
      j++;
    }
  }

  geometry.attributes.position.needsUpdate = true;
}
