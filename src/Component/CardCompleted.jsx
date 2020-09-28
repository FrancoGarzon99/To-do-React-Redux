import React from "react";
import { useDispatch } from "react-redux";
import { quitarTodo } from "../ActionsRedux/Actions";
import { Button, Card } from "react-bootstrap";

// Estilos Card Complete
const completeStyle = {
  containCardComplete: {
    padding: "15px",
    margin: "20px",
    boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.1)",
    border: "3px solid rgb(89, 240, 52)",
  },
  textCheckComplete: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCardComplete: {
    textTransform: "initial",
    textDecoration: "line-through",
  },
};

//Componente Card Complete
const CardComplete = ({ text, id }) => {
  //Importamos dispacht para invocar a la accion quitarTodo
  const dispatch = useDispatch();

  const removeTodo = () => {
    //Usamos nuestra funcion removeTodo para dispachar la accion(quitarTodo) y asi borrar la tarea seleccionada
    dispatch(quitarTodo(id));
  };

  // Renderizamos el componente cardTodo
  return (
    <div>
      <Card style={completeStyle.containCardComplete}>
        <div style={completeStyle.textCheckComplete}>
          <h5 style={completeStyle.textCardComplete}>{text}</h5>
          <div>
            <Button variant="danger" onClick={removeTodo} size="sm">
              <span className="material-icons">delete_forever</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default CardComplete;
