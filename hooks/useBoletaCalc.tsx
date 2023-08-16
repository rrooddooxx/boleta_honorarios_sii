"use client";

import { useState } from "react";
import { formatCurrencyCLP } from "../utils/currency";

export const useBoletaCalc = () => {
  const [montoBoleta, setMontoBoleta] = useState<number>(0);

  const setMontoBoletaHandler = (amount: string) => {
    const totalAmount = Number(amount);
    if (isNaN(totalAmount)) return setMontoBoleta(0);

    setMontoBoleta(totalAmount);
  };

  const calc = (amount: number, porcRetencion: number = 0) => {
    if (porcRetencion < 1) {
      return {
        montoBoletaBruto: formatCurrencyCLP(0),
        montoBoletaLiquido: formatCurrencyCLP(0),
        totalPagoBruto: formatCurrencyCLP(0),
        totalPagoLiquido: formatCurrencyCLP(0),
        totalRetencionBruto: formatCurrencyCLP(0),
        totalRetencionLiquido: formatCurrencyCLP(0),
      };
    }

    const factor = 1 - porcRetencion / 100;
    const montoBoletaBruto = amount;
    const montoBoletaLiquido = amount / factor;
    const totalPagoBruto = amount * factor;
    const totalPagoLiquido = amount;
    const totalRetencionBruto = amount - totalPagoBruto;
    const totalRetencionLiquido = montoBoletaLiquido - amount;
    const totalRetencionCovid = 0;
    return {
      montoBoletaBruto: formatCurrencyCLP(montoBoletaBruto),
      montoBoletaLiquido: formatCurrencyCLP(montoBoletaLiquido),
      totalPagoBruto: formatCurrencyCLP(totalPagoBruto),
      totalPagoLiquido: formatCurrencyCLP(totalPagoLiquido),
      totalRetencionBruto: formatCurrencyCLP(totalRetencionBruto),
      totalRetencionLiquido: formatCurrencyCLP(totalRetencionLiquido),
    };
  };

  return {
    montoBoleta,
    montoBoletaFormatted: formatCurrencyCLP(montoBoleta),
    setMontoBoleta: setMontoBoletaHandler,
    calc,
  };
};
