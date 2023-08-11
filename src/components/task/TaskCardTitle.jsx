import React, { useState } from "react";

function TaskCardTitle() {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleFocus = (e) => {
    e.currentTarget.select();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = (e) => {
    setIsClick(false);
  };
  return (
    <div className="taskCardTitleInputArea" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
}

export default TaskCardTitle;
