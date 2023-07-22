import { ReactNode, createContext, useState, useContext } from "react";

export const todosContext = createContext<TodosContext | null>(null);
export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  createdAt: Date;
  completed: Boolean;
};
export type TodosContext = {
  todos: Todo[];
  handleStoreTodos: (task: string) => void;
  toggleCheck: (id:string) => void;
  handledelete: (id:string) => void;
};
export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() =>{
    try {
      const newTodos = localStorage.getItem("todos") || "[]"
      return JSON.parse(newTodos) as Todo[]
    } catch (error) {
      return []
    }
  });
  const handleStoreTodos = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos))
      return newTodos;
    });
  };
  const toggleCheck = (id: string) => {
    setTodos((prev) =>{
        let newTodos = prev.map((todo) => {
            if(todo.id === id){
                return { ...todo, completed:!todo.completed }
            }
            return todo;
        })
        return newTodos
    })
  }
  const handledelete = (id:string) => {
    setTodos((prev)=>{
       let newTodos = prev.filter((filterTodo)=> filterTodo.id !== id)
       localStorage.setItem("todos", JSON.stringify(newTodos))
       return newTodos
    })
  }
  return (
    <todosContext.Provider value={{ todos, handleStoreTodos,toggleCheck, handledelete }}>
      {children}
    </todosContext.Provider>
  );
};
export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("Wrap It");
  }
  return todosConsumer;
};
