// Utility to detect if the device supports hover and fine pointer (desktop/laptop)
export function isDesktopDevice() {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }
  return false;
}
