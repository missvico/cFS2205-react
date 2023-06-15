import logo from './logo.svg';
import './App.scss';
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Landing from './sections/Landing'
import Counter from './sections/Counter'
import ToDoList from './sections/ToDoList';
import StarWarsPeople from './sections/StarWarsPeople'
import StarWarsSinglePerson from './sections/StarWarsSinglePerson'
import Register from './sections/Register'
import Navbar from './sections/Navbar'

function App() {
  const date = "Martes"
  
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <section className="App-header">
        <Routes>
          <Route path="/" element={<Landing username="Victoria" dia={date}/>}/>
          <Route path="/counter" element ={<Counter/>}/>
          <Route path="/tasks" element ={<ToDoList/>}/>
          <Route path="/starwars/:id" element ={<StarWarsSinglePerson/>}/>
          <Route path="/starwars" element ={<StarWarsPeople/>}/>
          <Route path="/register" element ={<Register/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
