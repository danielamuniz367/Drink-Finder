export default function convertToOz(m: string) {
  const split = m.split(" ");
  const measurement = split[0];
  const unit = split[1];
  console.log(measurement, unit);
  let conversion = "";

  switch (unit) {
    case "cup":
    case "cups":
      conversion = (parseInt(measurement) * 8).toFixed(1).toString();
      break;
    case "tsp":
      conversion = (parseInt(measurement) / 6).toFixed(1).toString();
      break;
    case "tblsp":
      conversion = (parseInt(measurement) / 2).toFixed(1).toString();
      break;
    case "cl":
      conversion = (parseInt(measurement) / 2.957).toFixed(1).toString();
      break;
    default:
      break;
  }

  return conversion ? `${conversion} oz` : m;
}
