import { api } from "./client";

export const getPokemonList = (page = 0, limit = 24) => {
  const offset = page * limit;
  return api(`/pokemon?offset=${offset}&limit=${limit}`);
};

export const getPokemonDetail = (name: string) => {
  return api(`/pokemon/${name}`);
};
