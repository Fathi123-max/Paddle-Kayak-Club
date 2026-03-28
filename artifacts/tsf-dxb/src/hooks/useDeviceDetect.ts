// src/hooks/useDeviceDetect.ts
import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  isLowPower: boolean;
  pixelRatio: number;
}

export function useDeviceDetect(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouch: false,
    isLowPower: false,
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isDesktop = !isMobile && !isTablet;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check battery status
    let isLowPower = false;
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const lowPower = !battery.charging && battery.level < 0.2;
        setDeviceInfo({
          isMobile,
          isTablet,
          isDesktop,
          isTouch,
          isLowPower: lowPower,
          pixelRatio: Math.min(window.devicePixelRatio, 2),
        });
      });
    }

    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      isTouch,
      isLowPower,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    });

    return () => {};
  }, []);

  return deviceInfo;
}
