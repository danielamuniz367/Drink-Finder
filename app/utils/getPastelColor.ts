export default function getPastelColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 60 * Math.random()) +
    "%," +
    (75 + 10 * Math.random()) +
    "%)"
  );
}
