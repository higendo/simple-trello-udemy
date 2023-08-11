import React from "react";
import { v4 as uuid } from "uuid";

function AddTaskCardButton({ taskCardList, setTaskCardList }) {
  const addTaskCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
}

export default AddTaskCardButton;
