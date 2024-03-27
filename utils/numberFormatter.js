export function formatter(number) {
  return new Intl.NumberFormat().format(number);
}
