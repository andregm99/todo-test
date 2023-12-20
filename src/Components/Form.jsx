import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function Form({addTodo}){
    const[text,setText]=useState("")
    const[id,setId]=useState(0)

    const createTodo=(text)=>{
        if (text==="") {
            alert('digite uma tarefa')
        }
        else{
            const todoObj={text:text,id:id}
            setId(id+1)
            addTodo(todoObj)
        }
        setText("")
    }


    return(
        <>
            <Paper style={{padding:10}}>
                <div style={{display:"flex"}}>
                    <TextField id="outlined-basic" label="Tarefa" 
                    variant="outlined" 
                    fullWidth
                    onChange={(e)=>setText(e.target.value) }
                    value={text}
                    />
                    <Button variant="text" onClick={()=>createTodo(text)}>Add</Button>
                </div>
            </Paper>
        </>
    )
}