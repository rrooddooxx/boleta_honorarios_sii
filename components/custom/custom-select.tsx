"use client";

import { Dispatch, SetStateAction } from "react";
import { BusquedaConstants } from "../../utils/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type RetencionValue = {
  year: number;
  porc: number;
};

export const CustomSelect = ({
  valueList,
  setPorcRetencion,
}: {
  valueList: RetencionValue[];
  setPorcRetencion: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Select onValueChange={(e) => setPorcRetencion(Number(e))}>
      <SelectTrigger className="lg:w-[180px]">
        <SelectValue placeholder={BusquedaConstants.SELECCIONE_ANIO} />
      </SelectTrigger>
      <SelectContent>
        {valueList &&
          valueList.length > 0 &&
          valueList.map((val, idx) => {
            return (
              <SelectItem value={val.porc.toString()} key={val.year + idx}>
                {`${val.year.toString()} (${val.porc.toString()}%)`}
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};
