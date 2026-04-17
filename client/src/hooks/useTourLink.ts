const BASE_TOUR_URL = "https://ccps-presentation-production.up.railway.app/b/mnuunqzn";

/**
 * Hook to get the tour booking link with query parameters
 * Reads agent, line, and email from URL parameters and appends them to the booking URL
 */
export function useTourLink(): string {
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    const agent = searchParams.get("agent");
    const line = searchParams.get("line");
    const email = searchParams.get("email");

    // Build query string from available parameters
    const params = new URLSearchParams();
    if (agent) params.append("agent", agent);
    if (line) params.append("line", line);
    if (email) params.append("email", email);

    const queryString = params.toString();
    return queryString ? `${BASE_TOUR_URL}?${queryString}` : BASE_TOUR_URL;
  }

  return BASE_TOUR_URL;
}
