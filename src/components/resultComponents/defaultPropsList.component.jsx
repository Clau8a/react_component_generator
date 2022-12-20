import React from "react";
import { varTypes } from "../../helpers/constants";

const DefaultPropsList = (props) => {
  const { componentName, useDefaultProps, params } = props;
  if (!useDefaultProps) {
    return null;
  }
  return (
    <div>
      <label>
        <b>{componentName}</b>
        {`.defaultProps = {`}
      </label>
      <div>
        {params
          .filter((param) => !param.isRequired)
          .map((param) => (
            <label key={param.name + param.id}>
              &nbsp;&nbsp;
              {`${param.name}: ${
                varTypes.find((p) => p.id === parseInt(param.type, 10))
                  .defaultValue
              },`}
            </label>
          ))}
      </div>
      <label>{"};"}</label>
    </div>
  );
};

export default DefaultPropsList;
