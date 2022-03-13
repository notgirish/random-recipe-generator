import React, { useState } from 'react'

export default function TodoPage() {

    let [taskInput, setTaskInput] = useState('')
    let [taskListArray, setTaskListArray] = useState([])

    function addTasktoArray() {
        // if the taskInput has atleast some text and is not a empty string then add the task
        if (taskInput) {
            setTaskListArray([...taskListArray, { taskText: taskInput, taskComplete: false }])
            //set the input field content to empty, so a new task can be added            
            setTaskInput('')
        }
    }

    function deleteTaskfromArray(indexToBeDeleted) {
        setTaskListArray(taskListArray.filter((task, index) => (index !== indexToBeDeleted)))
        // basically update the taskListArray where the old task has been filtered/removed out,
        //if index === indexToBeDeleted then it would only return the exact element to be deleted
    }

    function clearAllTasks() {
        setTaskListArray([])
    }

    function taskDone(indexToChange) {
        taskListArray.forEach((element, index) => {
            if (index === indexToChange) {
                element.taskComplete ? element.taskComplete = false : element.taskComplete = true
            }
        })
        setTaskListArray([...taskListArray]) //we need to update the state so the component can be refreshed onclick
    }


    return (
        <div className='container todo'>
            <h1>What's the plan for the day?</h1>

            <div className="todoInputFieldBtns">
                <input type='text' className='taskInputField' value={taskInput} onKeyDown={(event) => { if (event.key === "Enter") addTasktoArray() }} onChange={event => setTaskInput(event.target.value)} placeholder="Enter a Task" />
                <button className='addTaskBtn' onClick={addTasktoArray}>+</button>
                <button className='inputClearBtn' onClick={clearAllTasks}><i className="fa-solid fa-recycle fa-xl"></i></button>
            </div>


            {taskListArray.map((task, index) => (
                <div className='todo-task-item' key={index}>

                    {task.taskComplete ? <p className='taskComplete'>{task.taskText}</p> : <p>{task.taskText}</p>}

                    <div className="options">
                        <button onClick={() => taskDone(index)}><i className="fa fa-solid fa-circle-check fa-2x"></i></button>
                        <button onClick={() => deleteTaskfromArray(index)}><i className="fa fa-solid fa-trash-can fa-2x"></i></button>
                    </div>
                    {/* arrow function allows us to use functions with parameters */}
                </div>
            ))}

        </div>
    )
}
