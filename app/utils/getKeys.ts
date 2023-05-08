export default function getKeys(data: any, key: string, length?: number) {
  return Object.keys(data)
    .filter((k) => k.includes(key))
    .slice(0, length);
}
