import * as React from "react"

const MOBILE_BREAKPOINT = 768

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {}
  }
  try {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    if (!mql) return () => {}
    if (mql.addEventListener) {
      mql.addEventListener("change", callback)
      return () => mql.removeEventListener("change", callback)
    } else if ('addListener' in mql) {
      const legacyMql = mql as MediaQueryList & { addListener: (cb: () => void) => void; removeListener: (cb: () => void) => void };
      legacyMql.addListener(callback);
      return () => legacyMql.removeListener(callback);
    }
  } catch {
    // Ignore matchMedia errors
  }
  return () => {}
}

function getSnapshot() {
  if (typeof window === "undefined") return false
  return window.innerWidth < MOBILE_BREAKPOINT
}

function getServerSnapshot() {
  return false
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

