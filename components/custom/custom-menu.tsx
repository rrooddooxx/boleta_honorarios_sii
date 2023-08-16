import { MenubarLabel } from "@radix-ui/react-menubar";
import { Menubar, MenubarMenu } from "../ui/menubar";
import { ThemeSwitch } from "./theme-switch";

export const CustomMenu = () => {
  return (
    <div>
      <Menubar className="mt-3">
        <MenubarLabel className="font-bold">CalcHonorarios 🇨🇱</MenubarLabel>
        <MenubarMenu>
          {/*           <MenubarTrigger>Acerca De</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Desarrollado por Sebastián Kravetz</MenubarItem>

            <MenubarSeparator />
            <MenubarItem>Corporación NoLineal</MenubarItem>
          </MenubarContent> */}
          <MenubarLabel>
            <ThemeSwitch />
          </MenubarLabel>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
