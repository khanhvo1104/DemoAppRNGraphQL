export const FormatCurrency = (
  price: number,
  format: string = 'VN',
  symbol: string = 'VND',
) => {
  let newCurrency = new Intl.NumberFormat(format, {
    style: 'currency',
    currency: symbol,
  });
  return newCurrency.format(price);
};
