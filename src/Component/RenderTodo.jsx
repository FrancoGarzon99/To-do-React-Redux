import React from "react";
import { useSelector } from "react-redux";
import CardTodo from "./CardTodo";
import CardCompleted from "./CardCompleted";
// import { saveState } from "../Storage";

//Comenzamos a renderizar los datos del store en pantalla
const RenderTodo = () => {
  //Le pasamos los datos traidos de store(state del store) de redux a nuestra funcion saveState que luego la guardara en el LocalStorage
  // const dataLocalStorage = useSelector((state) => saveState(state));
  // Aqui nos estamos suscribiendo al store de redux
  const listToDo = useSelector((state) => state);
  return (
    <div>
      {listToDo.map((t, i) => {
        if (t.complete) {
          return <CardCompleted key={t.id} {...t} />;
        } else {
          return <CardTodo key={t.id} {...t} />;
        }
      })}
    </div>
  );
};

export default RenderTodo;
