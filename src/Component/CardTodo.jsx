import React from "react";
import { useDispatch } from "react-redux";
import { quitarTodo, CompleteTodo } from "../ActionsRedux/Actions";

import { Button, Card } from "react-bootstrap";

// Estilos Css de Card Todo
const cardStyle = {
  containerCard: {
    padding: "15px",
    margin: "20px",
    boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.2)",
  },
  textCheck: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCard: {
    textTransform: "capitalize",
  },
  checkDelet: {
    margin: "0px 8px",
  },
};

const CardTodo = ({ text, id }) => {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(quitarTodo(id));
  };
  // Renderizamos el componente cardTodo
  return (
    <div>
      <Card style={cardStyle.containerCard}>
        <div style={cardStyle.textCheck}>
          <h5 style={cardStyle.textCard}>{text}</h5>
          <div>
            <Button
              style={cardStyle.checkDelet}
              size="sm"
              variant="success"
              onClick={(e) => {
                dispatch(CompleteTodo(id));
              }}
            >
              <i className="material-icons">done</i>
            </Button>
            <Button variant="danger" onClick={removeTodo} size="sm">
              <span className="material-icons">delete_forever</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardTodo;
