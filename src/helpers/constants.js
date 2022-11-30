export const varTypes = [
  { id: 1, name: "string", defaultValue: "''" },
  { id: 2, name: "number", defaultValue: "null" },
  { id: 3, name: "object", defaultValue: "null" },
  { id: 4, name: "func", defaultValue: "f => f" },
  { id: 5, name: "array", defaultValue: "[]" },
  { id: 6, name: "arrayof(string)", defaultValue: "null" },
  { id: 7, name: "arrayof(number)", defaultValue: "null" },
];

export const defaultReturn = () => {
  return "  return <></>;";
};
