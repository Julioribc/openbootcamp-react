import './App.css';
import Ejemplo4 from './hooks/ejemplo4';
import TaskListComponent from './components/container/task_list.jsx'
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './hooks/lifecycle/Clock';
import AllCycles from './hooks/lifecycle/AllCycles';
import Father from './components/container/father';
import ListContact from './components/container/list_contact';



function App() {
  return (
    <div className="App">
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre='Julio'>
          todo lo que hay aqui, es tratado como props.children
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        {/* <TaskListComponent /> */}
        {/* <GreetingStyled name='Julio'/> */}
        {/* <Clock /> */}
        {/* <AllCycles /> */}
        {/* Gestion de eventos */}
        {/* <Father /> */}
        <ListContact />
    </div>
  );
}

export default App;
