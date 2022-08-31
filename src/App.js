// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import {useState} from 'react';

function App() {

  const [productosComprados, setProductosComprados] = useState(0);  //declaro variable con el set para ir actualizando el estado
  const suma = () =>{                                               //hago funcion para actualizar estado con la suma
    setProductosComprados(productosComprados + 1)
  }

  return (                                                         //paso por props productosComprados a cabecera y la funcion a listado
    <div className="App"> 
      <Cabecera productosComprados = {productosComprados}/>        
      <Listado suma = {suma}/>                                     
    </div>
  );
}

export default App;
