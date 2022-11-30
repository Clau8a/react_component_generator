import React from "react";

const PropTypesList = (props) => {
  const { componentName, useProptypes, propTypesParams } = props;
  if (!useProptypes) {
    return null;
  }
  return (
    <div>
      <label>
        <b>{componentName}</b>
        {`.propTypes = {`}
      </label>
      {propTypesParams()}
      <label>{"};"}</label>
    </div>
  );
};

export default PropTypesList;
