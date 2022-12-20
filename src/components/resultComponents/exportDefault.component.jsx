import React from "react";

const ExportDefault = ({ componentName }) => {
  return (
    <label>
      <span className="reservedWord">export default</span>
      <b> {componentName}</b>;
    </label>
  );
};

export default ExportDefault;
