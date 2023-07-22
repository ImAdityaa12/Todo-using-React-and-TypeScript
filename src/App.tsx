import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import "./App.css"
Navbar
Todos
const App = () => {
  return (
    <main>
      <h1>Todo React + TypeScript</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}

export default App