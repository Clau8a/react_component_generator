import React from 'react';

const typeOption = [
  { id: 1, name: "string", defaultValue: "''" },
  { id: 2, name: "number", defaultValue: 'null' },
  { id: 3, name: "object", defaultValue: 'null' },
  { id: 4, name: "func", defaultValue: 'f => f' },
  { id: 5, name: "array", defaultValue: '[]' },
  { id: 6, name: "arrayof(string)", defaultValue: 'null' },
  { id: 7, name: "arrayof(number)", defaultValue: 'null' },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, componentName: action.payload };
    case "SET_USE_PROPTYPES":
      return { ...state, useProptypes: action.payload };
    case "SET_USE_DEFAULTPROPS":
      return { ...state, useDefaultProps: action.payload };
    case "SET_PARAMS":
      return { ...state, params: action.payload };
    case "SET_NEW_PARAM":
      return { ...state, newParam: action.payload };
    default:
      return { ...state };
  }
}


const Form = () => {

  const initialState = {
    componentName: '',
    usesProptypes: false,
    useDefaultProps: false,
    params: [],//{name:"name", type:"", isRequired:false}
    newParam: { name: '', type: '', isRequired: false },
    useSemiColon: true,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { componentName,
    useProptypes,
    useDefaultProps,
    params, newParam,
    useSemiColon } = state;


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`SET_${name.toUpperCase()}`, value);
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const defaultProps = () => {
    return <div>
      {
        params.filter(param => !param.isRequired).map(param =>
          <label>&nbsp;&nbsp;{`${param.name}: ${typeOption.find(p => p.id === parseInt(param.type,10)).defaultValue},`}</label>
        )
      }
    </div>

  }

  const propTypesParams = () => {
    return <div>
      {
        params.map(param =>
          <label>&nbsp;&nbsp;{`${param.name}: PropTypes.${typeOption.find(p => p.id === parseInt(param.type, 10)).name}${param.isRequired ? '.isRequired' : ''},`}</label>
        )
      }
    </div>

  }

  const formatCompilado = () => {
    return <div className="compilado">
      <label>{`import React from 'react';`}</label>
      {
        useProptypes &&
        <label>{`import PropTypes from 'prop-types';`}</label>
      }
      {
        componentName &&
        <div>
          <br />
          {
            params.length > 0
              ? <>
                <label>{`const ${componentName} = ({`}</label>
                {/* {params.map(param => <label>&nbsp;&nbsp;{`${param.name},`}</label>)} */}
                &nbsp;&nbsp;{params.map(param => <span>{`${param.name}, `}</span>)}
                <label>{`})=>{`}</label>
              </>
              : <label>{`const ${componentName} = () =>{`}</label>
          }
          <br />
          <label>{'};'}</label>
          <br />
          {
            useProptypes &&
            <div>
              <label>{`${componentName}.propTypes = {`}</label>
              {
                propTypesParams()
              }
              <label>{'};'}</label>
            </div>
          }
          {
            useDefaultProps &&
            <div>
              <label>{`${componentName}.defaultProps = {`}</label>
              {
                defaultProps()
              }
              <label>{'};'}</label>
            </div>
          }
          <label>{`export default ${componentName};`}</label>
        </div>
      }

    </div>

  };


  const handleUpdateParams = (e, idParam) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_PARAMS",
      payload: params.map(param => param.id === idParam ? { ...param, [name]: value } : param)
    })
  }

  // const getText = React.useCallback(() => {
  //   let text = document.getElementsByClassName('compilado')[0];
  //   if (text) {
  //     return text.innerText;
  //   }
  //   return '';
  // }, [state]);
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
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6 form-group">
                <label>Component Name</label>
                <input className="form-control" name="NAME" value={componentName} onChange={handleChange} />
              </div>
              <div className="col-12 col-md-2 form-group">
                <label>PropTypes</label>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input"
                    id="proptypes" checked={useProptypes} onChange={() => handleChange({ target: { name: 'use_proptypes', value: !useProptypes } })} />
                </div>
              </div>
              <div className="col-12 col-md-2 form-group">
                <label>defaultProps</label>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input"
                    id="defaultprops" checked={useDefaultProps} onChange={() => handleChange({ target: { name: 'use_defaultprops', value: !useDefaultProps } })} />
                </div>
              </div>
            </div>
            <label>Parameters</label>
            <hr />
            <div className="">
              {
                params.map((param) =>
                  <div className="row" key={param.id}>
                    <div className="col-md-6">
                      <label>Name</label>
                      <input className="form-control" name="name" value={param.name} onChange={(e) => handleUpdateParams(e, param.id)} />
                    </div>
                    <div className="col-md-4">
                      <label>Type</label>
                      <select className="form-control" name="type" value={param.type} onChange={(e) => handleUpdateParams(e, param.id)}>
                        {
                          typeOption.map(type => <option key={type.id} value={type.id}>{type.name}</option>)
                        }
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label>required?</label>
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"
                          checked={param.isRequired}
                          onChange={(e) => handleUpdateParams({ target: { name: 'isRequired', value: !param.isRequired } }, param.id)}
                        />
                      </div>
                    </div>
                  </div>
                )
              }
              <form onSubmit={handleAddParam}>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input className="form-control" value={newParam.name} name="name" onChange={handleNewParamChange} required />
                  </div>
                  <div className="col-md-4">
                    <label>Type</label>
                    <select className="form-control" value={newParam.type} name="type" onChange={handleNewParamChange} required>
                      <option value=''>Select type</option>
                      {
                        typeOption.map(type => <option key={type.id} value={type.id}>{type.name}</option>)
                      }
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>required?</label>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input"
                        checked={newParam.isRequired}
                        onChange={(e) => handleNewParamChange({ target: { name: 'isRequired', value: !newParam.isRequired } },)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-success" type="submit">Add</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-header">
                Component
              </div>
              <div className="card-body">
                {formatCompilado()}
              </div>
              {/* <textarea defaultValue={getText()}></textarea> */}
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Form;
