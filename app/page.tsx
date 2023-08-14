"use client";

import { useCallback, useEffect, useState } from "react";
import { CustomCard, CustomCardProps } from "../components/custom/custom-card";
import {
  CustomSelect,
  RetencionValue,
} from "../components/custom/custom-select";
import { CustomSwitch } from "../components/custom/custom-switch";
import { Input } from "../components/ui/input";
import { ModeToggle } from "../components/ui/theme-toggle";
import { useBoletaCalc } from "./hooks/useBoletaCalc";
import {
  ResultadoBoletaConstants,
  TitulosResultadoConstants,
} from "./utils/string-constants";

const inputLabelsText = {
  inputLabel1: ResultadoBoletaConstants.RESULTADO_MONTO_LABEL,
  inputLabel2: ResultadoBoletaConstants.RESULTADO_PAGO_LABEL,
  inputLabel3: ResultadoBoletaConstants.RESULTADO_RETENCION_LABEL,
};

const valoresLiquidosProps: CustomCardProps = {
  title: TitulosResultadoConstants.TITLE_LIQUIDO,
  subtitle: TitulosResultadoConstants.SUBTITLE_LIQUIDO,
  inputLabels: inputLabelsText,
  buttons: false,
  values: {
    montoBoleta: "0",
    montoPago: "0",
    montoRetencion: "0",
  },
};
const valoresBrutosProps: CustomCardProps = {
  title: TitulosResultadoConstants.TITLE_BRUTO,
  subtitle: TitulosResultadoConstants.SUBTITLE_BRUTO,
  inputLabels: inputLabelsText,
  buttons: false,
  values: {
    montoBoleta: "0",
    montoPago: "0",
    montoRetencion: "0",
  },
};

const retencionValues: RetencionValue[] = [
  { year: 2020, porc: 10.75 },
  { year: 2021, porc: 11.5 },
  { year: 2022, porc: 12.25 },
  { year: 2023, porc: 13 },
  { year: 2024, porc: 13.75 },
  { year: 2025, porc: 14.5 },
  { year: 2026, porc: 15.25 },
  { year: 2027, porc: 16 },
  { year: 2028, porc: 17 },
];

export default function Page() {
  const [porcRetencion, setPorcRetencion] = useState(0);
  const [porcRetencionFinal, setPorcRetencionFinal] = useState(0);
  const [isBonoCovid, setIsBonoCovid] = useState(false);
  const { montoBoleta, montoBoletaFormatted, setMontoBoleta, calc } =
    useBoletaCalc();
  const {
    montoBoletaBruto,
    montoBoletaLiquido,
    totalPagoBruto,
    totalPagoLiquido,
    totalRetencionBruto,
    totalRetencionLiquido,
  } = calc(montoBoleta, porcRetencionFinal);

  const updatePorcRetencion = useCallback(
    (porc: number, toggleBonoCovid: boolean) => {
      return toggleBonoCovid
        ? setPorcRetencionFinal((val) => val + 3)
        : setPorcRetencionFinal(porc);
    },
    []
  );

  useEffect(() => {
    updatePorcRetencion(porcRetencion, isBonoCovid);
  }, [porcRetencion, isBonoCovid, updatePorcRetencion]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <Input
          placeholder="Ingresa aquí el monto..."
          onChange={(e) => setMontoBoleta(e.target.value)}
          value={montoBoleta}
        />
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
      <div className="mt-4">Porcentaje de Retención: {porcRetencionFinal}%</div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-8">
        <div className="rounded-lg">
          <CustomCard
            {...valoresLiquidosProps}
            values={{
              montoBoleta: montoBoletaLiquido,
              montoPago: totalPagoLiquido,
              montoRetencion: totalRetencionLiquido,
            }}
          />
        </div>
        <div className="rounded-lg">
          <CustomCard
            {...valoresBrutosProps}
            values={{
              montoBoleta: montoBoletaBruto,
              montoPago: totalPagoBruto,
              montoRetencion: totalRetencionBruto,
            }}
          />
        </div>
      </div>
    </div>
  );
}
