import React, { useState } from 'react';
// import listItem from './listItem.css';

export default function TODO (){
    const [todo, setTodo] = useState('');
    const [todoArr, setTodoArr] = useState([]);

    const addItem = (newTask) => {
        localStorage.setItem('todoList', JSON.stringify(todoArr));
        setTodoArr([...todoArr, newTask]);
        setTodo('');
        console.log(todoArr)
        
        };
    const changeTask = (e)=> {
        setTodo(e.target.value);
    }       
        return (
            <div>
                <input type="text" placeholder="enter here" onInput={changeTask} value={todo} />
                <button onClick={()=> addItem(todo)}>ADD</button>
                {todoArr.map((todo, i) => {
                        return  <List key={Math.random()*500} i={i} todo={todo}/>
                })}
            </div>
        )
}

export function createdTaskList(){
    let allTasks = JSON.parse(localStorage.getItem('todoList'));
    return (
        <ul>
           {allTasks.map((t, i) => { return <List key={Math.random()*500} i={i} todo={allTasks[i]}/>})}
        </ul>
    )
}
 
function List (props) {   
    
    const [isCompleted, setIsCompleted] = useState(false);
    const [isExist, setIsExist] = useState('true');
     
    const removeItem = () => {
        setIsExist({ isExist: "false"});
    }
    const completed = () => {
        setIsCompleted({isCompleted: true});
    }

    if(isExist === 'true'){ 
        return (
           <li className={isCompleted  ? "listItemLine" : "listItem"} key={props.i}>{props.todo}
                     <div >
                       <button  onClick={removeItem}>&#x2715;</button>
                       <button  onClick={completed}>&#10004;</button>
                   </div>
            </li>             
       
       ) 
    }
}
