import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  function onTaskFormSubmit(e) {
    e.preventDefault();
    const newTasks = [...tasks, formData];
    setTasks(newTasks);
  }
  const [formData, setFormData] = useState({ text: "", category: "Code" });
  const [tasks, setTasks] = useState(TASKS);
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setActiveCategory={setActiveCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} formData={formData} setFormData={setFormData} categories={CATEGORIES} />
      <TaskList activeCategory={activeCategory} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
