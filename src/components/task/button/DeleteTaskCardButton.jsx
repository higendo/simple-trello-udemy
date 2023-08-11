import React from "react";

function DeleteTaskCardButton({ taskCardList, setTaskCardList, taskCard }) {
  const deleteTaskCard = (taskCardId) => {
    // タスクカードを削除する
    setTaskCardList(taskCardList.filter((e) => e.id !== taskCardId));
  };
  return (
    <div>
      <button
        className="deleteTaskCardButton"
        onClick={() => deleteTaskCard(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default DeleteTaskCardButton;
