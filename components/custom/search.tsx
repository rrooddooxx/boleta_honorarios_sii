import { Dispatch, SetStateAction } from "react";
import { retencionValues } from "../../utils/constants";
import { Input } from "../ui/input";
import { ModeToggle } from "../ui/theme-toggle";
import { CustomSelect } from "./custom-select";
import { CustomSwitch } from "./custom-switch";

export type SearchProps = {
  boleta: {
    setMontoBoleta: (amount: string) => void;
    montoBoleta: number;
  };
  setPorcRetencion: Dispatch<SetStateAction<number>>;
  bonoCovid: {
    setIsBonoCovid: Dispatch<SetStateAction<boolean>>;
    isBonoCovid: boolean;
  };
};

export const Search = ({
  boleta: { montoBoleta, setMontoBoleta },
  bonoCovid: { setIsBonoCovid, isBonoCovid },
  setPorcRetencion,
}: SearchProps) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-8">
      <div className="grid grid-cols-1">
        <div className="text-sm text-muted-foreground mb-3">
          Ingresa aquí el monto a calcular:
        </div>
        <Input
          placeholder="Ingresa aquí el monto..."
          onChange={(e) => setMontoBoleta(e.target.value)}
          value={montoBoleta}
        />
      </div>
      <CustomSelect
        valueList={retencionValues}
        setPorcRetencion={setPorcRetencion}
      />
      <CustomSwitch
        label="Bono Covid"
        setChecked={setIsBonoCovid}
        checkedVal={isBonoCovid}
      />
      <ModeToggle />
    </div>
  );
};
