import LazyImage from "@/components/lazy-image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { usePokemonDetail } from "@/hooks/use-pokemon";
import { useMemo } from "react";
import { Link } from "react-router";

interface PokemonCardProps {
  name: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const { data, isFetching } = usePokemonDetail(name);
  const spriteUrl = useMemo(
    () =>
      data?.sprites?.other?.dream_world?.front_default ||
      data?.sprites?.front_default,
    [data]
  );
  return (
    <Link to={`/pokemon/${name}`}>
      <Card className="gap-0 py-0">
        <CardHeader className="px-4 py-2">
          <div className="text-center font-medium capitalize">{name}</div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-hidden border-t">
            <LazyImage
              src={spriteUrl}
              alt={name}
              isLoading={isFetching}
              className="object-contain p-4 aspect-square w-full transform hover:scale-110 transition duration-200"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
