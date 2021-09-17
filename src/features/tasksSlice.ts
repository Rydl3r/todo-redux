import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface TasksState {
  tasks: { title: string, done: boolean, id: number }[]
}

// Define the initial state using that type
const initialState: TasksState = {
  tasks: [
    {
      title: "Wash Dishes",
      done: false,
      id: 1
    },
    {
      title: "Do Chores",
      done: true,
      id: 2
    }
  ],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {


      state.tasks = state.tasks.filter((elem) => {
        return (elem.id !== action.payload)
      })
    },
    addTodo: (state, action) => {
      state.tasks.push({
        title: action.payload,
        done: false,
        id: (state.tasks[state.tasks.length - 1].id) + 1
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteTodo, addTodo } = tasksSlice.actions

export default tasksSlice.reducer