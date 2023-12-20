import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import TodoDialog from './TodoDialog';
export default function TodoItem({todo,removeTodo,editTodo}) {
    const[openDialog,setOpenDialog]=useState(false)

    const dialogHandler=()=>{
      setOpenDialog(!openDialog)//aqui estou invertendo o valor do meu estado no caso estou colocando para true.  
         
    }
        return (
    <>
        <TodoDialog openDialog={openDialog} dialogHandler={dialogHandler} todo={todo} editTodo={editTodo}/>
        <Paper style={{marginTop:'1em', padding:5}} >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={()=>removeTodo(todo.id)} >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                
                  tabIndex
                  disableRipple
                  inputProps
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} onClick={()=>setOpenDialog(true)}  />
            </ListItemButton>
          </ListItem>
        </Paper>
    </>   
        );
}