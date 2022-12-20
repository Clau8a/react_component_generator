import React from "react";

const ParamsList = (props) => {
  const { componentName, params } = props;

  if (params.length === 0) {
    return (
      <label>
        <span className="reservedWord">const </span> <b>{componentName}</b>
        {` = () =>{`}
      </label>
    );
  }

  return (
    <>
      <label>
        <span className="reservedWord">const </span> <b>{componentName}</b>
        {`  = ({`}
      </label>
      &nbsp;&nbsp;
      {params.map((param) => (
        <span key={param.id}>{`${param.name}, `}</span>
      ))}
      <label>{`})=>{`}</label>
    </>
  );
};

export default ParamsList;
