import { useState } from 'react'
import Tasks from './Tasks';

const ToDoList = () => {

    const [toDo, setToDo] = useState([]);
    
    let tasks = [
        {id: 1, activity: 'Learning Code'},
        {id: 2, activity: 'Play with my Gremlin Kids'},
        {id: 3, activity: 'Rest and Fuck everything'},
        {id: 4, activity: 'Learning Code Again'},
        {id: 5, activity: 'Bring my Children to the School'},
    ]

  return (
    <div>
        <h1> Tasks List</h1>
        {toDo.map(item => <li key={item.id}>{item.activity}</li>)}
        {tasks.map((item) => <Tasks key={item.id} setToDo={setToDo} task={item} />)}
    </div>
  )
}

export default ToDoList