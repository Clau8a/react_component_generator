import React from "react";
import FormattedCode from "./formattedCode.component";

const ComponentCard = ({ state }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="card">
        <div className="card-header">
          Component <b>{state.componentName}</b>
        </div>
        <div className="card-body">
            <FormattedCode {...state} />
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
