import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks, activeCategory }) {
  function handleDelete(text) {
    const newTasks = tasks.filter(task => task.text !== text);
    setTasks(newTasks);
  }
  const taskItems = tasks
  .filter(({category}) => ( activeCategory === "All" ? true : category === activeCategory ))
  .map(({text, category}) => {
    return <Task key={text} handleDelete={handleDelete} setTasks={setTasks} text={text} category={category} />
  });
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
