import React from "react";

function CategoryFilter({ categories, setActiveCategory }) {
  function handleClick(e) {
    e.target.className = "selected";
    setActiveCategory(e.target.value);
  }
  const buttons = categories.map(cat => <button key={cat} value={cat} onClick={handleClick}>{cat}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
