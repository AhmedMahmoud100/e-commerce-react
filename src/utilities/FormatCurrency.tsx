
const Currency_Formatter = new Intl.NumberFormat(undefined, {
  currency: "USD", style: "currency"
})

export function FormatCurrency(number: number) {
  return Currency_Formatter.format(number)
}
