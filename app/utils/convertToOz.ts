import getConversionResult from "./getConversionResult";

export default function convertToOz(measurement: string) {
  if (!measurement) return "";
  const splitMsrmt = measurement.split(" ");
  const parsedMsrmt = splitMsrmt
    .filter((s) => parseInt(s))
    .map((m) =>
      m.includes("/")
        ? parseFloat((parseInt(m[0]) / parseInt(m[2])).toString())
        : parseInt(m)
    )
    .reduce((a, c) => a + c, 0);

  const unit = splitMsrmt
    .map((m) => m.toLowerCase())
    .filter(
      (u) =>
        u === "cup" ||
        u === "cups" ||
        u === "tsp" ||
        u === "tblsp" ||
        u === "ml" ||
        u === "cl" ||
        u === "oz"
    )
    .join(" ");

  let conversion = "";

  switch (unit) {
    case "cup":
    case "cups":
      conversion = getConversionResult(parsedMsrmt * 8);
      break;
    case "tsp":
      conversion = getConversionResult(parsedMsrmt / 6);
      break;
    case "tblsp":
      conversion = getConversionResult(parsedMsrmt / 2);
      break;
    case "ml":
      conversion = getConversionResult(parsedMsrmt / 29.574);
      break;
    case "cl":
      conversion = getConversionResult(parsedMsrmt / 2.957);
      break;
    case "l":
      conversion = getConversionResult(parsedMsrmt * 33.814);
      break;
    case "oz":
      conversion = getConversionResult(parsedMsrmt);
    default:
      break;
  }

  return conversion ? `${conversion} oz` : measurement;
}
