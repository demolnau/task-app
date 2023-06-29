//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import Overview from './components/Overview.js';
//import uniqid from "uniqid";

function App(){
  const [task, setTask] = useState("");
  const [tasks, setMessageList] = useState([]);
  
  function setTaskHandler(e){
    setTask(e.target.value)
  }

  function addToTasksHandler(e){
    setMessageList([
      ...tasks,
      {
        id: tasks.length + 1, // Use the current size as ID (needed to iterate the list later)
        task: task
      }
    ]);
    setTask(""); //clear the input box
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder="Enter a message"
        onChange={setTaskHandler}
      />
      <input
        type="button"
        value="Add"
        onClick={addToTasksHandler}
      />
      <Overview tasks ={tasks}/>
      {/* <ul>
        {tasks.map(m => (
          <li key={m.id}>{m.task}</li>
        ))}
      </ul> */}

    </div>
  );
};
export default App