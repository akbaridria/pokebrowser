import CardDetail from "./component/card-detail";
import { usePokemonDetail } from "@/hooks/use-pokemon";
import { useParams } from "react-router";
import { LoaderIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LazyImage from "@/components/lazy-image";
import { useMemo } from "react";

const DetailPage = () => {
  const { slug } = useParams();
  const { data, isFetching } = usePokemonDetail(slug || "");

  const imgUrl = useMemo(
    () =>
      data?.sprites?.other?.dream_world?.front_default ||
      data?.sprites?.front_default ||
      "",
    [data]
  );

  if (isFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center gap-2">
          <LoaderIcon className="animate-spin" />
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (!data && !isFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Pokemon Not Found</h2>
          <p className="text-muted-foreground">
            The requested pokemon does not exist. <br /> Please check the URL and try
            again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[40%_60%] p-4">
      <Card className="gap-0 py-0 h-fit">
        <CardHeader className="px-4 py-2">
          <div className="text-center font-medium capitalize">
            {data?.name || ""}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-hidden border-t">
            <LazyImage
              src={imgUrl}
              alt={data?.name || "pokemon image"}
              isLoading={isFetching}
              className="object-contain p-4 aspect-square w-full transform hover:scale-110 transition duration-200"
            />
          </div>
        </CardContent>
      </Card>
      {data && <CardDetail {...data} />}
    </div>
  );
};

export default DetailPage;
