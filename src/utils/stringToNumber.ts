function stringToNumber(value: string) {
  const number = Number(value.replaceAll(".", "").replaceAll(",", "."));
  return isNaN(number) ? null : number;
}

export default stringToNumber;
