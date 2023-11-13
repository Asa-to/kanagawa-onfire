export const getKeys = <T extends { [key: string]: unknown }>(
  obj: T
): (keyof T)[] => {
  const keys = Object.keys(obj);
  return keys;
};
