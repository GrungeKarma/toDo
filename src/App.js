import React, { useState } from 'react';
import './App.css';

function App() {
  //input that we can type new tasks into
  //button submit task and put into list of tasks
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState('');
  //console.log(taskList);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const newTask = [
      ...taskList,
      {
        id: Date.now(),
        taskName: inputTask,
        completed: false
      }
    ]
    setTaskList(newTask);
    setInputTask('');

  }

  const toggleCompleted = (clickedTaskId) => {
    const newList = taskList.map((item) => {
      if (item.id === clickedTaskId) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    })
    setTaskList(newList);
  }

  const clearCompleted = () => {
    const clearSelected = taskList.filter(task => task.completed !== true);
    setTaskList(clearSelected);
  }

  // const clearAll = () => setTaskList([]);



  return (
    <div className="App">
      <h1 id='title'>To Do</h1>
      <main className="App-main">

        <form>
          <input
            id="input"
            type='text'
            placeholder='name task here'
            onChange={(e) => setInputTask(e.target.value)}
            value={inputTask}
            required
          />
          <button
            id="submit"
            onClick={handleSubmit}

          >submit</button>
        </form>

        {
          taskList.map(task => {

            if (task.taskName === '') {
              return null;
            };
            return (
              <button
                id="submit"
                key={task.id}
                onClick={() => toggleCompleted(task.id)}
                className={`task${task.completed === true ? ' completed' : ''}`}
              >
                {task.taskName}
              </button>
            )
          })
        }

        <button onClick={clearCompleted}>clear completed</button>
        <button onClick={() => setTaskList([])}>clear all</button>
      </main>
    </div>
  );
}

export default App;
