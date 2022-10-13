import './App.css';
import toDoList from './todo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import createdTaskList from './input'

function App() {
  
  return (
    <BrowserRouter>
    <>
        <nav className="nav justify-content-center">
            <Link to='/' className="nav-link active text-dark" >Home page</Link>
            <Link to='todo' className="nav-link text-dark" >To Do App</Link>
            <Link to='list' className="nav-link text-dark" >To Do List</Link>
        </nav>
    </>
      <Routes>
          <Route path='/' element={<div className="App">Welcome guest!</div>}></Route>
          <Route path='/todo' element={<div className="App">
            {toDoList()}
          </div>}>
          </Route>
          <Route path='list' element={<div className="App"><>Here are the tasks for today: <createdTaskList></createdTaskList></> </div>}></Route>
          <Route path='*' element={<div className="App">....oooopsss! The page you're looking for can't be found!!!</div>}></Route>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
