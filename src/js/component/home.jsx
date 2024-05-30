import { createContext, useContext } from "react";
import { ContextExclusionPlugin, HotModuleReplacementPlugin } from "webpack";

const Home = createContext()

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState ([])

    const addTodo = (text) => {
        const newTodo = {text, completed: false}
        setTodos ([...todos, newTodo])
    }
    const toggleTodo = (index) => {
        const newTodo = todo.map((todo, i)) => {
            if (i === index) {
                return {...todo, completed: !todo.completed, completedAt: !todo.completed : 
                    !todo.completed ? new Date().toISOString( ) : null}
            }
            return todo
        })
        setTodos(newTodos)
    }
    return (
        <todoContext.provider value= {{todos, addTodo, toggleTodo}}>
            {children}
        </todoContext.provider>
    )
export const TodoProvider = ({children}) => {

}   
export const useTodo = () = {
    const context = useContext(todoContext)
    return context
    )
}

export default Home
