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
    pixelRatio: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isDesktop = !isMobile && !isTablet;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check battery status asynchronously
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const lowPower = !battery.charging && battery.level < 0.2;
        setDeviceInfo(prev => ({
          ...prev,
          isMobile,
          isTablet,
          isDesktop,
          isTouch,
          isLowPower: lowPower,
        }));
      }).catch(() => {
        // Battery API failed, use defaults
        setDeviceInfo(prev => ({
          ...prev,
          isMobile,
          isTablet,
          isDesktop,
          isTouch,
          isLowPower: false,
        }));
      });
    } else {
      setDeviceInfo(prev => ({
        ...prev,
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        isLowPower: false,
      }));
    }
  }, []);

  return deviceInfo;
}
