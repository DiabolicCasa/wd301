import React from "react";
import { TaskItem } from "./types";

// interface TaskProp {
//     title: string;
// }

class Task extends React.Component<TaskItem> {
  render() {
    return (
      <div className="TaskItem p-2 mt-1 rounded-md shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">Due Date: {this.props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}

export default Task;
