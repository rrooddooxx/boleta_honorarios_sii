import { CustomCardProps } from "../components/custom/custom-card";
import { RetencionValue } from "../components/custom/custom-select";

export const retencionValues: RetencionValue[] = [
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

export enum BusquedaConstants {
  SELECCIONE_ANIO = "Seleccione año",
}

export enum ResultadoBoletaConstants {
  RESULTADO_MONTO_LABEL = "Debes hacer la boleta por:",
  RESULTADO_PAGO_LABEL = "Recibes:",
  RESULTADO_RETENCION_LABEL = "Retención SII:",
  RESULTADO_BONO_COVID = "Retención (Sólo 3% Bono Covid):",
}

export enum TitulosResultadoConstants {
  TITLE_LIQUIDO = "Valores Líquidos",
  SUBTITLE_LIQUIDO = "Si lo pactado fue en valores líquidos...",
  TITLE_BRUTO = "Valores Brutos",
  SUBTITLE_BRUTO = "Si lo pactado fue en valores brutos...",
}

export const inputLabelsText = {
  inputLabel1: ResultadoBoletaConstants.RESULTADO_MONTO_LABEL,
  inputLabel2: ResultadoBoletaConstants.RESULTADO_PAGO_LABEL,
  inputLabel3: ResultadoBoletaConstants.RESULTADO_RETENCION_LABEL,
  inputBonoCovid: ResultadoBoletaConstants.RESULTADO_BONO_COVID,
};

export const valoresLiquidosProps: CustomCardProps = {
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

export const valoresBrutosProps: CustomCardProps = {
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

export enum ThemeConstants {
  LIGHT_THEME = "light",
  DARK_THEME = "dark",
  SYSTEM_THEME = "system",
}
