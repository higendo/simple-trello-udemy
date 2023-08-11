import React, { useState } from "react";

import TaskCardTitle from "./TaskCardTitle";
import DeleteTaskCardButton from "./button/DeleteTaskCardButton";
import TaskAddInput from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

function TaskCard({ taskCardList, setTaskCardList, taskCard, index }) {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className="taskCardTitleAndDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <DeleteTaskCardButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
