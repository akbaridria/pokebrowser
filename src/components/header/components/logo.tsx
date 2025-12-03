import { CompassIcon } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <CompassIcon />
      <div className="font-bold text-md md:text-lg">PokeBrowser</div>
    </div>
  );
};

export default Logo;
