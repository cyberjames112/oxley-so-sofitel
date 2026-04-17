const DEFAULT_LINE_ID = "0936669147";

/**
 * Hook to get the LINE link based on query parameters
 * Synchronously reads the URL parameter to ensure it works in static deployments
 * If ?line=XXXXXX is present, use that LINE ID
 * Otherwise, use the default LINE ID
 */
export function useLineLink(): string {
  // Synchronously read the URL parameter instead of using useState + useEffect
  // This ensures the correct value is available immediately during render
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    const lineId = searchParams.get("line");
    
    if (lineId) {
      return `https://line.me/ti/p/~${lineId}`;
    }
  }
  
  return `https://line.me/ti/p/~${DEFAULT_LINE_ID}`;
}
