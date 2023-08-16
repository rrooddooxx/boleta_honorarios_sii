import { Dispatch, SetStateAction } from "react";
import { retencionValues } from "../../utils/constants";
import { Input } from "../ui/input";
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
      <div className="flex items-end">
        <CustomSelect
          valueList={retencionValues}
          setPorcRetencion={setPorcRetencion}
        />
      </div>
      <div className="flex items-end">
        <CustomSwitch
          label="Bono Covid"
          setChecked={setIsBonoCovid}
          checkedVal={isBonoCovid}
        />
      </div>
    </div>
  );
};
