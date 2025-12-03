import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import Logo from "./components/logo";
import TooltipButton from "./components/tooltip-button";
import ThemeSwitcher from "./components/theme-switcher";

const Header = () => {
  return (
    <div className="border-b border-secondary sticky top-0 z-10 bg-background">
      <div className="border-x border-secondary p-4 container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <TooltipButton
            content="View on github"
            trigger={
              <a
                href="https://github.com/akbaridria/pokebrowser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost">
                  <GithubIcon className="h-4 w-4" />
                  <div className="hidden md:block">Github</div>
                </Button>
              </a>
            }
          />
          <Separator orientation="vertical" className="min-h-4" />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
