import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import  {IState, ITodo} from "../interfaces/interfaces"


const initialState: IState = {
  allTodos: [],
  filterStatus: null,
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      state.allTodos = [...state.allTodos, action.payload]
      toast.success("New Todo Created!!")
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const newArray = state.allTodos.filter(todo => todo.id !== action.payload)
      state.allTodos = [...newArray]
      toast.warning("Todo is deleted!")
    } 
  },
})

const reducer = todoSlice.reducer

export const { addNewTodo, deleteTodo } = todoSlice.actions
export default reducer