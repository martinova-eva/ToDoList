import logo from './logo.svg';
import './App.css';
import toDoList from './todo';

function App() {
  return (
    <div className="App">
      {toDoList()}
    </div>
  );
}

export default App;
