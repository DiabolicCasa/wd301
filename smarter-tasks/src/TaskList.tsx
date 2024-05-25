import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task
        key={idx}
        dueDate={task.dueDate}
        description={task.description}
        title={task.title}
      />
    ));
  }
}

export default TaskList;
