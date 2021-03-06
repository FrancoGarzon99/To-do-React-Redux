import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AddTodo from "./Component/AddTodo";
import RenderTodo from "./Component/RenderTodo";
import Logo from "./todo.svg";

// Estilos App
const stylesApp = {
  addContainer: {
    margin: "120px 0px",
  },
  imgPrin: {
    display: "flex",
    marginLeft: "50px",
  },
  imgWidth: {
    width: "60px",
  },
  title: {
    color: "#fff",
    fontWeight: "700",
  },
  copy: {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    margin: "15px 0",
  },
  name: {
    color: "#fff",
  },
};

//Renderizamos por pantalla
function App() {
  return (
    <Container>
      <Row className="center">
        <h1 style={stylesApp.title}>Listar Tareas</h1>
        <div className="center" style={stylesApp.imgPrin}>
          <Image src={Logo} style={stylesApp.imgWidth} />
        </div>
      </Row>
      <Row>
        <Col sm={4}>
          <div style={stylesApp.addContainer}>
            <AddTodo />

            <p style={stylesApp.copy}>
              Developed by &nbsp;{" "}
              <a
                href="https://github.com/FrancoGarzon99"
                target="_blank"
                style={stylesApp.name}
              >
                Franco Garzón
              </a>
            </p>
          </div>
        </Col>
        <Col sm={8}>
          <div className="scroll-style">
            <RenderTodo />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
