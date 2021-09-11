import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  //build a toDo app
  // input for new task
  //button submit task and put into list of tasks
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState('');

  function handleSubmit(e) {

    const newTask = [
      ...taskList,
      {
        id: Date.now(),
        taskName: inputTask,
        completed: false
      }

    ]
    setTaskList(newTask);
    e.preventDefault();
  }

  const toggleCompleted = (clickedTaskId) => {
    const newList = taskList.map((item) => {
      if (item.id === clickedTaskId) {
        return {
          ...item,
          completed: item.completed
        }
      }
      else {
        return item;
      }

    })
    setTaskList(newList);
  }
  const clearCompleted = () => {
    const clearSelected = taskList.filter(task => task.completed !== true);
    setTaskList(clearSelected);
  }

  const clearAll = () => setTaskList([]);



  return (
    <div className="App">
      <main className="App-Main">
        <h1>Hello</h1>
        <form action="">
          <input
            type="text"
            placeholder="name task here"
            onChange={(e) => setInputTask(e.target.value)}
            value={inputTask}

          />
          <button
            onClick={handleSubmit}
          >submit</button>
        </form>

        {
          taskList.map(task => {
            return (
              <button
                key={task.id}
                onClick={() => toggleCompleted(task.id)}
                className={`task${task.completed === true ? ' completed' : ''}`}
              >{task.taskName}</button>
            )
          })
        }
        <button
        ></button>
      </main>
    </div>
  );
}

export default App;
