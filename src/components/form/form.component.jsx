import React from "react";
import { varTypes, initialState } from "../../helpers/constants";

const Form = ({ state, dispatch }) => {
  const { componentName, usePropTypes, useDefaultProps, params, newParam } =
    state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`SET_${name.toUpperCase()}`, value);
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleUpdateParams = (e, idParam) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_PARAMS",
      payload: params.map((param) =>
        param.id === idParam ? { ...param, [name]: value } : param
      ),
    });
  };

  const handleAddParam = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      dispatch({
        type: "SET_PARAMS",
        payload: [...params, { ...newParam, id: params.length + 1 }]
      })
      dispatch({
        type: "SET_NEW_PARAM",
        payload: initialState.newParam
      })
    }
  }

  const handleNewParamChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_NEW_PARAM",
      payload: { ...newParam, [name]: value }
    })
  };

  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6 form-group">
          <label>Component Name</label>
          <input
            className="form-control"
            name="NAME"
            value={componentName}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-2 form-group">
          <label>PropTypes</label>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="proptypes"
              checked={usePropTypes}
              onChange={() =>
                handleChange({
                  target: { name: "use_proptypes", value: !usePropTypes },
                })
              }
            />
          </div>
        </div>
        <div className="col-12 col-md-2 form-group">
          <label>defaultProps</label>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="defaultprops"
              checked={useDefaultProps}
              onChange={() =>
                handleChange({
                  target: { name: "use_defaultprops", value: !useDefaultProps },
                })
              }
            />
          </div>
        </div>
      </div>
      <label>Parameters</label>
      <hr />
      <div className="">
        {params.map((param) => (
          <div className="row" key={param.id}>
            <div className="col-md-6">
              <label>Name</label>
              <input
                className="form-control"
                name="name"
                value={param.name}
                onChange={(e) => handleUpdateParams(e, param.id)}
              />
            </div>
            <div className="col-md-4">
              <label>Type</label>
              <select
                className="form-control"
                name="type"
                value={param.type}
                onChange={(e) => handleUpdateParams(e, param.id)}
              >
                {varTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <label>required?</label>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={param.isRequired}
                  onChange={(e) =>
                    handleUpdateParams(
                      {
                        target: {
                          name: "isRequired",
                          value: !param.isRequired,
                        },
                      },
                      param.id
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={handleAddParam}>
          <div className="row">
            <div className="col-md-6">
              <label>Name</label>
              <input
                className="form-control"
                value={newParam.name}
                name="name"
                onChange={handleNewParamChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label>Type</label>
              <select
                className="form-control"
                value={newParam.type}
                name="type"
                onChange={handleNewParamChange}
                required
              >
                <option value="">Select type</option>
                {varTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <label>required?</label>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={newParam.isRequired}
                  onChange={(e) =>
                    handleNewParamChange({
                      target: {
                        name: "isRequired",
                        value: !newParam.isRequired,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
