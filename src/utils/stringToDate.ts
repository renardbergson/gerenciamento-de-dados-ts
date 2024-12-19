function stringToDate(stringDate: string) {
  const [date, time] = stringDate.split(" ");
  const [day, month, year] = date.split("/").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const dateObject = new Date(year, month - 1, day, hour, minute);
  return dateObject;
}

export default stringToDate;
