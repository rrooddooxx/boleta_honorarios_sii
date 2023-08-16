import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeConstants } from "../../utils/constants";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export const ThemeSwitch = () => {
  const { setTheme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (systemTheme === ThemeConstants.DARK_THEME) {
      setTheme(ThemeConstants.DARK_THEME);
      setIsDark(true);
    } else {
      setTheme(ThemeConstants.LIGHT_THEME);
      setIsDark(false);
    }
  }, [setTheme, systemTheme]);

  const themeHandler = (switchState: boolean) => {
    if (switchState) {
      setTheme(ThemeConstants.DARK_THEME);
      setIsDark(true);
    } else {
      setTheme(ThemeConstants.LIGHT_THEME);
      setIsDark(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="custom-switch"
        className="transform scale-75"
        checked={isDark}
        onCheckedChange={(e) => themeHandler(e)}
      />
      <Label htmlFor="custom-switch" className="text-xs lg:text-sm">
        Modo Oscuro
      </Label>
    </div>
  );
};
