import { usePokemonList } from "@/hooks/use-pokemon";
import FilterBar from "./components/filter-bar";
import { Activity, useMemo } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { FilterOption } from "@/types";
import PokemonCard from "./components/pokemon-card";
import { useQueryState } from "nuqs";
import { useDebounce } from "@/hooks/use-debounce";

const gridClasses: Record<FilterOption, string> = {
  "grid-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  "grid-2": "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4",
};

const LoadingState = ({ filterOption }: { filterOption: FilterOption }) => {
  return (
    <div className={`grid gap-4 ${gridClasses[filterOption]}`}>
      {Array(24)
        .fill(0)
        .map((_, index) => {
          return (
            <Card className="gap-0 p-0" key={index}>
              <CardHeader className="px-4 py-2 flex items-center justify-center">
                <Skeleton className="w-[50%] h-6" />
              </CardHeader>
              <Skeleton className="w-full aspect-square rounded-none rounded-b-lg" />
            </Card>
          );
        })}
    </div>
  );
};

const HomePage = () => {
  const [filterOption] = useQueryState<FilterOption>("filterbar", {
    defaultValue: "grid-3",
    parse: (value) => (value === "grid-2" ? "grid-2" : "grid-3"),
    serialize: (value) => value,
  });
  const [page] = useQueryState<number>("page", {
    defaultValue: 1,
    parse: Number,
    serialize: String,
  });
  const [search] = useQueryState<string>("search", {
    defaultValue: "",
    parse: String,
    serialize: String,
  });

  const debounceSearch = useDebounce(search, 500);

  const { data, isFetching } = usePokemonList(page);

  const filteredData = useMemo(() => {
    if (!debounceSearch) return data;
    return {
      ...data,
      results: data?.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debounceSearch.toLowerCase())
      ),
    };
  }, [data, debounceSearch]);

  return (
    <div className="space-y-6 px-0 md:px-8 py-0 md:py-8">
      <div className="pb-4">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Explore Pokémon
        </h1>
        <p className="text-muted-foreground">
          Browse the complete collection of Pokémon and discover their stats,
          types, and abilities.
        </p>
      </div>

      <FilterBar />
      <Activity mode={isFetching ? "visible" : "hidden"}>
        <LoadingState filterOption={filterOption} />
      </Activity>
      <Activity mode={data && !isFetching ? "visible" : "hidden"}>
        {filteredData?.results?.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            No Pokémon found matching your search.
          </div>
        ) : (
          <div className={`grid gap-4 ${gridClasses[filterOption]}`}>
            {filteredData?.results?.map((pokemon) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))}
          </div>
        )}
      </Activity>
    </div>
  );
};

export default HomePage;
