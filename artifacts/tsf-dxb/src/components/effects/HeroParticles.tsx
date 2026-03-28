// src/components/effects/HeroParticles.tsx
import { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';
import { createParticleWave, updateParticleWave } from '@/lib/three/particleUtils';
import { useReducedMotion } from 'framer-motion';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

export interface HeroParticlesProps {
  width?: number;
  height?: number;
}

export const HeroParticles = memo(function HeroParticles({
  width = 800,
  height = 600,
}: HeroParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isLowPower, pixelRatio } = useDeviceDetect();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const countRef = useRef(0);

  // Determine particle count based on device
  const particleCount = isMobile ? 800 : isLowPower ? 0 : 1500;
  const particleSize = isMobile ? 10 : 15;

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion || isLowPower) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      1,
      10000
    );
    camera.position.z = 1000;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;

    // Create particles with adaptive count
    const { points, geometry } = createParticleWave({
      color: new THREE.Color(0xD4A574),
      count: particleCount,
      size: particleSize,
      pixelRatio,
    });
    particlesRef.current = points;
    scene.add(points);

    // Add to DOM
    containerRef.current.appendChild(renderer.domElement);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX = (event.clientX - rect.left - width / 2) * 0.5;
        mouseY = (event.clientY - rect.top - height / 2) * 0.5;
      }
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      countRef.current += 0.1;

      // Update particle wave
      if (particlesRef.current) {
        updateParticleWave(geometry, countRef.current);
      }

      // Smooth camera movement based on mouse
      if (cameraRef.current) {
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      const newWidth = containerRef.current?.clientWidth || width;
      const newHeight = containerRef.current?.clientHeight || height;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (particlesRef.current) {
        geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
        scene.remove(particlesRef.current);
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [width, height, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
});
