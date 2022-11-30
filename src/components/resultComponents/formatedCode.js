import React from "react";
import PropTypes from "prop-types";
import { defaultReturn } from "../../helpers/constants";
import PropTypesList from "./propTypes.component";
import DefaultPropsList from "./defaultPropsList.component";
import ExportDefault from "./exportDefault.component";

const FormatedCode = (props) => {
  const {
    useProptypes,
    componentName,
    params,
    propTypesParams,
    useDefaultProps,
    defaultProps,
  } = props;
  return (
    <div className="compilado">
      <label>{`import React from 'react';`}</label>
      {useProptypes && <label>{`import PropTypes from 'prop-types';`}</label>}
      {componentName && (
        <div>
          <br />
          {params.length > 0 ? (
            <>
              <label>
                const <b>{componentName}</b>
                {`  = ({`}
              </label>
              {/* {params.map(param => <label>&nbsp;&nbsp;{`${param.name},`}</label>)} */}
              &nbsp;&nbsp;
              {params.map((param) => (
                <span>{`${param.name}, `}</span>
              ))}
              <label>{`})=>{`}</label>
            </>
          ) : (
            <label>
              const <b>{componentName}</b>
              {` = () =>{`}
            </label>
          )}
          {defaultReturn()}
          <label>{"};"}</label>
          <br />
          <PropTypesList
            componentName={componentName}
            useProptypes={useProptypes}
            propTypesParams={propTypesParams}
          />
          <br />
          <DefaultPropsList
            componentName={componentName}
            useDefaultProps={useDefaultProps}
            defaultProps={defaultProps}
          />
          <ExportDefault componentName={componentName} />
        </div>
      )}
    </div>
  );
};

FormatedCode.propTypes = {
  componentName: PropTypes.string,
  params: PropTypes.array,
  useProptypes: PropTypes.bool,
  useDefaultProps: PropTypes.bool,
  defaultProps: PropTypes.func,
  propTypesParams: PropTypes.func,
};

export default FormatedCode;
