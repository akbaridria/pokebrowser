const BASE_URL = "https://pokeapi.co/api/v2";

export const api = async (path: string) => {
  const res = await fetch(`${BASE_URL}${path}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `API request failed: ${path}`);
  }

  return res.json();
};
