export const formatCurrencyCLP = (amount: number) => {
  const clp = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return clp.format(amount);
};

export const revertFormatCurrency = (amount: string) => {
  return amount.replace(/\./g, "").replace(/,/g, "").replace(/\$/g, "");
};
