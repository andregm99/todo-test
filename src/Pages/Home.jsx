import { Container } from "@mui/material";
import Form from "../Components/Form";
import TodoItem from "../Components/TodoItem";
import { useState } from "react";



export default function Home(){
    const[todos,setTodos]=useState([])


    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    } 

    const removeTodo=(id)=>{
        var filtered=todos.filter((todo)=>todo.id !== id)//irá remover do meu array pois todos os id são iguais.
        setTodos(filtered)//colocando a varíavel dentro da controladora do meu estado.
    }

    const editTodo=(id,editedText)=>{
        var todoArray=[...todos]//
        for(var i in todoArray){
            if (todoArray[i].id === id) {//se o id do meu array de objetos for igual ao id passado... 
                todoArray[i].text=editedText//o texto da posição i do meu array irá receber o texto passado pelo usuário.
        }
    }
}
    return(
       <Container maxWidth={'xs'} style={{marginTop:'2em'}}>
            <Form addTodo={addTodo}/>
            {todos.map((todo)=><TodoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo}/>)}
       </Container>
       
    )
}