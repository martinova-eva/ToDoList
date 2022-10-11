import React from 'react';
import listItem from './listItem.css';

export default class TODO extends React.Component {
    state = {
        todo: "",
        todoArr: [],
    };
    render() {
        const addItem = () => {
            const list = [...this.state.todoArr, this.state.todo];
            this.setState({ todoArr: list, todo: '' });
        };
        return (
            <div>
                <input type="text" placeholder="enter here" onChange={(e) => this.setState({ todo: e.target.value })} value={this.state.todo} />
                <button onClick={addItem}>ADD</button>
                {this.state.todoArr.map((todo, i) => {
                    
                        return  <List i={i} todo={todo}/>
                
                   
                })}
            </div>
        )
    }
}

class List extends React.Component {   
    state = {
        isCompleted : false,
        isExist : "true"
    };
   
    render() {
        
        const removeItem = () => {
           this.setState({ isExist: !this.isExist});
        }
        const completed = () => {
           this.setState({isCompleted: "false"})
        }
       if(this.state.isExist === "true"){ 
        return (
            <li className={this.state.isCompleted ? "listItemLine" : "listItem"} key={this.props.i}>{this.props.todo}
                       <div>
                           <button  onClick={removeItem}>&#x2715;</button>
                           <button onClick={completed}>&#10004;</button>
                       </div>
            </li>             
           
       ) 
      }
    }
}


