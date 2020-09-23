//Nuestro Action sirve para poder enviar las acciones que realizamos en nuestros componentes al store de redux via dispatch
//Son funciones que crean las acciones que posteriormente vamos a utilizar en nuestros componentes

//Creamos nuestras variables, las cuales vamos a utilizar para pasarselas a nuestro reducer sin errores de tipeo
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const ADD_TODO = "ADD_TODO";

let todoId = 0;
//Accion agregar toDo
export function agregarTodo(text) {
  return {
    type: ADD_TODO,
    id: todoId++,
    text,
  };
}
//Accion quitar toDo
export function quitarTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
//Accion Complete toDo
export function CompleteTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
  };
}
