import React from "react";
import ReactDOM from "react-dom";
//Importamos las funciones que nesecitamos para crear el store
import { Provider } from "react-redux";
import { createStore } from "redux";
//Style Booststrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
//Importamos nuestras funciones para crear nuestro store
import Reducer from "./Reducer/Reducer";
//Creamos nuestro store y le pasamos el Reducer como parametro
const store = createStore(
  Reducer,

  //Esta linea sirve para usar Redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    {/*Traemos nuestro Privider que nos va a servir para crear el store y le pasamos como props el store creado */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
