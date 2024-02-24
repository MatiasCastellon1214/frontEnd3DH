const inlineExample = {
    backgroundColor: 'green'
}


const Tasks = ({task, setToDo}) => {

    const addTask = ()=>{
        setToDo((prevTask) => [...prevTask, task]);
    }

  return (
    <div style={inlineExample}>
        <h2>{task.activity}</h2>
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}



export default Tasks