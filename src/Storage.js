export const loadState = () => {
  try {
    const datosStoreRedux = localStorage.getItem("state");
    if (datosStoreRedux === null) {
      return undefined; // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
    }
    return JSON.parse(datosStoreRedux); // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return undefined; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
  }
};
export const saveState = (state) => {
  try {
    let datosStoreRedux = JSON.stringify(state);
    localStorage.setItem("state", datosStoreRedux);
  } catch (error) {
    console.log(error); // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
  }
};
