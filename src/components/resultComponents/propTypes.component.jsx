import React from "react";
import PropTypesParams from "./proptTypesParams.component";

const PropTypesList = (props) => {
  const { componentName, useProptypes, params } = props;
  if (!useProptypes) {
    return null;
  }
  return (
    <div>
      <label>
        <b>{componentName}</b>
        {`.propTypes = {`}
      </label>
      <PropTypesParams params={params} />
      <label>{"};"}</label>
    </div>
  );
};

export default PropTypesList;
