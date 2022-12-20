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



export const initialState = {
  componentName: 'MyComponent',
  usePropTypes: false,
  useDefaultProps: false,
  params: [],
  newParam: { name: '', type: '', isRequired: false },
  useSemiColon: true,
};


export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, componentName: action.payload };
    case "SET_USE_PROPTYPES":
      return { ...state, usePropTypes: action.payload };
    case "SET_USE_DEFAULTPROPS":
      return { ...state, useDefaultProps: action.payload };
    case "SET_PARAMS":
      return { ...state, params: action.payload };
    case "SET_NEW_PARAM":
      return { ...state, newParam: action.payload };
    default:
      return { ...state };
  }
}
