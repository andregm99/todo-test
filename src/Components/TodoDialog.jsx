import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState,useEffect } from 'react';
export default function TodoDialog({openDialog,dialogHandler,todo,editTodo}) {
    const[editedText,setEditedText]=useState( todo ? todo.text:'' )

    useEffect(()=>{
      // Atualiza o texto editado quando a propriedade 'todo' é alterada
     setEditedText(todo ? todo.text : '') 
    },[todo])

     const textHandler=()=>{
      editTodo(todo.id,editedText)
      dialogHandler()//
     }

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        onChange={(e)=>setEditedText(e.target.value)}
      >
        <DialogTitle id="alert-dialog-title">
          {"Editar tarefa"}
        </DialogTitle>
        <DialogContent>
            <TextField fullWidth defaultValue={editedText}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler} >Disagree</Button>
          <Button onClick={textHandler}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>    
  );
}