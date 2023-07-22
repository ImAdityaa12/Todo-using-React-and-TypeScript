import { useState } from "react";
import { useTodos } from "../store/context";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const {handleStoreTodos} = useTodos();
  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleStoreTodos(todo);
    setTodo("")
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
