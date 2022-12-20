import React from "react";

const ImportPropTypes = ({usePropTypes}) => {
  if (!usePropTypes) {
    return null;
  }

  return (
    <label>
      <span className="reservedWord">import </span>
      PropTypes
      <span className="reservedWord"> from </span>
      <span className="string">'prop-types'</span>;
    </label>
  );
};

export default ImportPropTypes;