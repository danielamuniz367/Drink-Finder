export default function getKeys(data: any, key: string) {
  return Object.keys(data).filter((k) => k.includes(key) && data[k] !== null);
}
