import './App.css';
import Ejemplo4 from './hooks/ejemplo4';
import TaskListComponent from './components/container/task_list.jsx'
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './hooks/lifecycle/Clock';
import AllCycles from './hooks/lifecycle/AllCycles';
import Father from './components/container/father';
import ListContact from './components/container/list_contact';
import OptionalRender from './components/pure/optionalRender';
import Cuadrado from './components/container/Cuadrado';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';



function App() {
  return (
    <div className="App">
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre='Julio'>
          todo lo que hay aqui, es tratado como props.children
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        <TaskListComponent />
        {/* <GreetingStyled name='Julio'/> */}
        {/* <Clock /> */}
        {/* <AllCycles /> */}
        {/* Gestion de eventos */}
        {/* <Father /> */}
        {/* <ListContact /> */}

        {/* EJjemplos de Renderizado condicional */}
        {/* <OptionalRender /> */}
        {/* <Cuadrado /> */}

        {/* Ejemplos de uso de Formik y Yup */}
        {/* <LoginFormik /> */}
        {/* <RegisterFormik /> */}
    </div>
  );
}

export default App;
