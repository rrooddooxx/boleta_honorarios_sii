import { Dispatch, SetStateAction } from "react";
import { retencionValues } from "../../utils/constants";
import { formatCurrencyCLP, revertFormatCurrency } from "../../utils/currency";
import { Input } from "../ui/input";
import { CustomSelect } from "./custom-select";
import { CustomSwitch } from "./custom-switch";

export type SearchProps = {
  boleta: {
    setMontoBoleta: (amount: string) => void;
    montoBoleta: number;
  };
  setPorcRetencion: Dispatch<SetStateAction<number | null>>;
  bonoCovid: {
    setIsBonoCovid: Dispatch<SetStateAction<boolean>>;
    isBonoCovid: boolean;
  };
};

const inputMontoBoletaHandler = (
  amount: string,
  setMontoBoleta: (amount: string) => void
) => {
  const cleanedNumber = revertFormatCurrency(amount);
  if (!Number.isSafeInteger(Number(cleanedNumber))) return;
  setMontoBoleta(cleanedNumber);
};

export const Search = ({
  boleta: { montoBoleta, setMontoBoleta },
  bonoCovid: { setIsBonoCovid, isBonoCovid },
  setPorcRetencion,
}: SearchProps) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
      <div className="grid grid-cols-1 self-end">
        <div className="max-sm:text-sm text-base text-muted-foreground mb-3">
          Ingresa aquí el monto a calcular:
        </div>
        <Input
          placeholder="Ingresa aquí el monto..."
          onChange={(e) =>
            inputMontoBoletaHandler(e.target.value, setMontoBoleta)
          }
          value={formatCurrencyCLP(montoBoleta)}
        />
      </div>
      <div className="grid grid-cols-1 self-end">
        <div className="max-sm:text-sm text-base text-muted-foreground mb-3">
          Seleccione el año para el % de retención:
        </div>
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
