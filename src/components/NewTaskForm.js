import React from "react";

function NewTaskForm({ categories, formData, setFormData, onTaskFormSubmit }) {
  const options = categories
  .filter(cat => cat !== "All")
  .map(cat => <option key={cat}>{cat}</option>)
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
