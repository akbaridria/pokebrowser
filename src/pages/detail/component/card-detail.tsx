import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Weight, Zap } from "lucide-react";

interface CardPokemonProps {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    slot: number;
    type: { name: string };
  }>;
  stats: Array<{
    stat: { name: string };
    base_stat: number;
  }>;
  abilities: Array<{
    ability: { name: string };
    is_hidden: boolean;
  }>;
  weight: number;
  height: number;
  base_experience: number;
}

const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-400",
  fighting: "bg-orange-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-600",
  rock: "bg-gray-600",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

const CardDetail: React.FC<CardPokemonProps> = (data) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">Type</h3>
          <div className="flex gap-2 flex-wrap">
            {data.types.map((type) => (
              <span
                key={type.slot}
                className={`${
                  typeColors[type.type.name] || "bg-gray-400"
                } px-3 py-1 rounded-full text-sm font-semibold capitalize text-foreground`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Weight className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                Weight
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {(data.weight / 10).toFixed(1)} kg
            </p>
          </div>
          <div className="bg-secondary p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                Height
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {(data.height / 10).toFixed(1)} m
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Base Stats
          </h3>
          <div className="space-y-2">
            {data.stats.map((stat) => (
              <div key={stat.stat.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium capitalize text-muted-foreground">
                    {stat.stat.name}
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    {stat.base_stat}
                  </span>
                </div>
                <Progress
                  value={Math.min((stat.base_stat / 150) * 100, 100)}
                  className="h-1.5"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Abilities
          </h3>
          <div className="space-y-1">
            {data.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span className="capitalize font-medium">
                  {ability.ability.name}
                </span>
                {ability.is_hidden && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">
                    Hidden
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary p-3 rounded-lg">
          <span className="text-xs font-semibold uppercase block mb-1 text-muted-foreground">
            Base Experience
          </span>
          <p className="text-lg font-bold text-foreground">
            {data.base_experience} XP
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetail;
