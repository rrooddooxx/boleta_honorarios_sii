"use client";

import { useCallback, useEffect, useState } from "react";
import { CustomCard } from "../components/custom/custom-card";
import { CustomMenu } from "../components/custom/custom-menu";
import { Search } from "../components/custom/search";
import { useBoletaCalc } from "../hooks/useBoletaCalc";
import {
  MOTD,
  valoresBrutosProps,
  valoresLiquidosProps,
} from "../utils/constants";

export default function Page() {
  console.log(MOTD);
  const [porcRetencion, setPorcRetencion] = useState<number | null>(null);
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
        ? setPorcRetencionFinal(porc + 3)
        : setPorcRetencionFinal(porc);
    },
    []
  );

  useEffect(() => {
    if (porcRetencion) {
      updatePorcRetencion(porcRetencion, isBonoCovid);
    }
  }, [porcRetencion, isBonoCovid, updatePorcRetencion]);

  return (
    <div className="container mx-auto">
      <CustomMenu />
      <Search
        boleta={{ setMontoBoleta, montoBoleta }}
        setPorcRetencion={setPorcRetencion}
        bonoCovid={{ setIsBonoCovid, isBonoCovid }}
      />

      {montoBoleta > 1 && porcRetencion ? (
        <div className="mt-4 font-bold">
          <span className="text-xl">💰</span> Porcentaje de Retención:{" "}
          {porcRetencionFinal}%
        </div>
      ) : montoBoleta > 1 ? (
        <div className="mt-4 max-sm:text-xs text-base font-bold dark:text-red-500 text-red-600 transition-all duration-100">
          <span className="text-xl max-sm:text-base">⚠️</span> Debe Seleccionar
          Año de Emisión de la Boleta!
        </div>
      ) : (
        <div></div>
      )}
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
      <div className="my-12 flex justify-center text-sm max-sm:text-xs whitespace-normal">
        <p className="text-center">
          Desarrollado por{" "}
          <a
            href="https://github.com/wwiiddeeweb"
            className="text-gray-500 hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-400 drop-shadow-sm"
          >
            Sebastián Kravetz (@wiiddeeweb){" "}
          </a>
          para{" "}
          <a
            href="https://nolineal.cl"
            className="text-gray-500 hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-400 drop-shadow-sm"
          >
            Corporación No Lineal
          </a>
        </p>
      </div>
    </div>
  );
}
