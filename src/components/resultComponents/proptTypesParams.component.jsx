import React from "react";
import { varTypes } from "../../helpers/constants";

const PropTypesParams = (params) => {
  return (
    <div>
      {params.map((param) => (
        <label key={param.name + param.id}>
          &nbsp;&nbsp;
          {`${param.name}: PropTypes.${
            varTypes.find((p) => p.id === parseInt(param.type, 10)).name
          }${param.isRequired ? ".isRequired" : ""},`}
        </label>
      ))}
    </div>
  );
};

export default PropTypesParams;
