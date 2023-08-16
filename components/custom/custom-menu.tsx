import { MenubarLabel } from "@radix-ui/react-menubar";
import { Menubar, MenubarMenu } from "../ui/menubar";
import { ThemeSwitch } from "./theme-switch";

export const CustomMenu = () => {
  return (
    <div className="drop-shadow-xl">
      <Menubar className="lg:mt-8 mt-5 flex w-full">
        <MenubarLabel className="font-bold text-sm lg:text-base !ml-2">
          CalcHonorarios 🇨🇱
        </MenubarLabel>
        <MenubarMenu>
          <MenubarLabel className="!ml-auto !mr-2">
            <ThemeSwitch />
          </MenubarLabel>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
