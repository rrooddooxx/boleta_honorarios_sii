import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";

export const CustomMenu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="font-bold">CalcHonorarios 🇨🇱</MenubarTrigger>
        <MenubarTrigger>Acerca De</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

/* 
<DollarSign />
        <CardTitle>Calculador Boletas de Honorarios 🇨🇱</CardTitle>
        <CardDescription>
          Porcentajes según Reforma Tributaria SII Chile
        </CardDescription> */
