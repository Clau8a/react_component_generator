import React from "react";

const DefaultPropsList = (props) => {
  const { componentName, useDefaultProps, defaultProps } = props;
  if (!useDefaultProps) {
    return null;
  }
  return (
    <div>
      <label>
        <b>{componentName}</b>
        {`.defaultProps = {`}
      </label>
      {defaultProps()}
      <label>{"};"}</label>
    </div>
  );
};

export default DefaultPropsList;
