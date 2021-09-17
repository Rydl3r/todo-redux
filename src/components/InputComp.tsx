import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addTodo } from '../features/tasksSlice'

const InputComp = () => {

    const [value, setValue] = useState("")

    const dispatch = useAppDispatch()

    const addNewTodo = () => {
        dispatch(addTodo(value))
        setValue("")
    }


    return (
        <div className="input">
            <Box component="form">
                <TextField id="outlined-basic" label="Input some todo..." variant="outlined" value={value} onChange={(e) => {
                    setValue(e.target.value)
                }} />
                <Button className="inputButton" variant="contained" color="primary" onClick={() => {
                    addNewTodo()
                }}>Add Todo</Button>
            </Box>
        </div>
    )
}

export default InputComp
