export const calculateValueToDisplay = val =>
  val
    .map(item => item.value)
    .reduce((acc, currentValue) => acc + currentValue, 0);
