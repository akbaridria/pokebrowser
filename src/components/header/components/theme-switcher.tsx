import { Button } from "@/components/ui/button";
import TooltipButton from "./tooltip-button";
import { useTheme } from "@/providers/theme-provider";
import { Activity, useCallback } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <TooltipButton
      content={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      trigger={
        <Button variant="ghost" size="icon" onClick={switchTheme}>
          <Activity mode={theme === "dark" ? "visible" : "hidden"}>
            <SunIcon className="h-4 w-4" />
          </Activity>
          <Activity mode={theme === "light" ? "visible" : "hidden"}>
            <MoonIcon className="h-4 w-4" />
          </Activity>
        </Button>
      }
    />
  );
};

export default ThemeSwitcher;
