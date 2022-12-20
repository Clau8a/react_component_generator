import React from "react";
import PropTypes from "prop-types";
import PropTypesList from "./propTypes.component";
import DefaultPropsList from "./defaultPropsList.component";
import ExportDefault from "./exportDefault.component";
import ParamsList from "./paramsList.component";
import DefaultReturn from "./defaultReturn.component";
import ImportReact from "./importReact.component";
import ImportPropTypes from "./importPropTypes.component";

const FormattedCode = (props) => {
  const { usePropTypes, componentName, params, useDefaultProps } = props;
  return (
    <div className="compiled">
      <code>
        <ImportReact />
        <ImportPropTypes usePropTypes={usePropTypes} />
        {componentName && (
          <div>
            <br />
            <ParamsList componentName={componentName} params={params} />
            <DefaultReturn />
            <label>{"};"}</label>
            <br />
            <PropTypesList
              componentName={componentName}
              usePropTypes={usePropTypes}
              params={params}
            />
            <br />
            <DefaultPropsList
              componentName={componentName}
              useDefaultProps={useDefaultProps}
              params={params}
            />
            <ExportDefault componentName={componentName} />
          </div>
        )}
      </code>
    </div>
  );
};

FormattedCode.propTypes = {
  componentName: PropTypes.string,
  params: PropTypes.array,
  usePropTypes: PropTypes.bool,
  useDefaultProps: PropTypes.bool,
  defaultProps: PropTypes.func,
  propTypesParams: PropTypes.func,
};

export default FormattedCode;
