export default function getPastelColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (80 + 10 * Math.random()) +
    "%)"
  );
}
