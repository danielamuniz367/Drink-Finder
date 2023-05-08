export default function convertToOz(m: string) {
  const split = m.split(" ");
  const measurement = split
    .filter((s) => parseInt(s))
    .map((m) =>
      m.includes("/")
        ? parseFloat((parseInt(m[0]) / parseInt(m[2])).toString())
        : parseInt(m)
    )
    .reduce((a, c) => a + c, 0);

  const unit = split
    .filter(
      (s) =>
        s === "cup" ||
        s === "cups" ||
        s === "tsp" ||
        s === "tblsp" ||
        s === "cl"
    )
    .join(" ");

  let conversion = "";

  switch (unit) {
    case "cup":
    case "cups":
      conversion = (measurement * 8).toFixed(1).toString();
      break;
    case "tsp":
      conversion = (measurement / 6).toFixed(1).toString();
      break;
    case "tblsp":
      conversion = (measurement / 2).toFixed(1).toString();
      break;
    case "cl":
      conversion = (measurement / 2.957).toFixed(1).toString();
      break;
    default:
      break;
  }

  return conversion ? `${conversion} oz` : m;
}
