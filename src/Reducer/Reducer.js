/*Nuestro Reducer sirve para poder captar la accion que realizo 
en el componente y dependiendo el caso se actualizara el stado 
del store con los nuevos datos que ingresaron
desde ese componente
*/

//Importamos las constantes para no tener errores de tipeo
import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
} from "../ActionsRedux/Actions.js";

//Inicializamos el state del store
const initialState = [];

//Aqui dependiendo el caso de la accion que hagamos en nuestro componente,esa accion llega al store,lo captamos en nuestro reducer y aplicara al type correcto
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          textState: "Item Agregado",
          complete: false,
        },
      ];
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.id) {
          if (todo.complete === false) {
            return {
              ...todo,
              complete: true,
              textState: "Complete To-Do",
            };
          }
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
