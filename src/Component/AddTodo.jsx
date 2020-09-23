//Creamos nuestro componente AddTodo , que  vamos a utilizar para agregar los datos al store de redux
import React, { useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { agregarTodo } from "../ActionsRedux/Actions";

//Estilos Add todo
const addStyle = {
  form: {
    display: "flex",
    flexDirection: "column",
  },
};

//Componente Add To-Do
function AddTodo() {
  //Guardamos en nuestro estado toDo lo que ingresa en el input(value)
  const [toDo, setToDo] = useState("");
  //Con dispatch, dispachamos(mandamos) los datos del input, pasandosela a nuestra funcion agregarTodo(actionRedux) para que la guarde en el state del store de redux
  const dispatch = useDispatch();

  //Desde formEnviado dispachamos los datos al store y cancelamos el evento por default del form
  const formEnviado = (e) => {
    e.preventDefault();
    //Aqui dispachamos los datos al store
    dispatch(agregarTodo(toDo));
    //Setamos el value del input a ""(vacio)
    setToDo("");
  };
  //Rendereamos el componente
  return (
    <>
      <Form onSubmit={formEnviado} style={addStyle.form}>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            placeholder="Misión a cumplir"
            type="text"
            value={toDo}
            onChange={(e) => {
              setToDo(e.target.value);
            }}
          />
        </InputGroup>
        <Button variant="info" type="submit">
          Añadir
        </Button>
      </Form>
    </>
  );
}

export default AddTodo;
