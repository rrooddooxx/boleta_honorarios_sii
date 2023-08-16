"use client";

import { useCallback, useEffect, useState } from "react";
import { CustomCard } from "../components/custom/custom-card";
import { CustomMenu } from "../components/custom/custom-menu";
import { Search } from "../components/custom/search";
import { useBoletaCalc } from "../hooks/useBoletaCalc";
import { valoresBrutosProps, valoresLiquidosProps } from "../utils/constants";

export default function Page() {
  const [porcRetencion, setPorcRetencion] = useState(0);
  const [porcRetencionFinal, setPorcRetencionFinal] = useState(0);
  const [isBonoCovid, setIsBonoCovid] = useState(false);
  const { montoBoleta, setMontoBoleta, calc } = useBoletaCalc();
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
      <CustomMenu />
      <Search
        boleta={{ setMontoBoleta, montoBoleta }}
        setPorcRetencion={setPorcRetencion}
        bonoCovid={{ setIsBonoCovid, isBonoCovid }}
      />

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
