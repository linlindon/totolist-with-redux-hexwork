import Navbar from "./components/Navbar";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
