import React from "react";
import NavBar from "./components/navbar/navbar";
import Form from "./components/form/form.component";
import { reducer, initialState } from './helpers/constants'
import "./App.css";
import ComponentCard from "./components/resultComponents/componentCard.component";
import Header from "./components/common/header.component";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <NavBar />
      <div className="container">
        <Header />
        <div className="wrapper">
          <Form state={state} dispatch={dispatch} />
          <ComponentCard state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
