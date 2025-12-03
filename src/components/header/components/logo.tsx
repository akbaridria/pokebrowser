import { CompassIcon } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <CompassIcon />
        <div className="font-bold text-md md:text-lg">PokeBrowser</div>
      </div>
    </Link>
  );
};

export default Logo;
