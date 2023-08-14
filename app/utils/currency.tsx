export const formatCurrencyCLP = (amount: number) => {
  const clp = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return clp.format(amount);
};
