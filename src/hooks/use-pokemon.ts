import { useQuery } from "@tanstack/react-query";
import { getPokemonList, getPokemonDetail } from "../api/pokemon";
import { type PokemonDetail, type PokemonListResponse } from "@/types";

export const usePokemonList = (page = 0) =>
  useQuery<PokemonListResponse, Error>({
    queryKey: ["pokemon-list", page],
    queryFn: () => getPokemonList(page),
  });

export const usePokemonDetail = (name: string) =>
  useQuery<PokemonDetail, Error>({
    queryKey: ["pokemon-detail", name],
    queryFn: () => getPokemonDetail(name),
    enabled: !!name,
  });
