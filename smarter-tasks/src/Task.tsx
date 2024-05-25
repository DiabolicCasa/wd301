import React from "react";
import { TaskItem } from "./types";

// interface TaskProp {
//     title: string;
// }

class Task extends React.Component<TaskItem> {
  render() {
    return (
      <div className="TaskItem p-2 mt-1 rounded-md shadow-md border border-slate-100">
        
        <h3 className="text-base font-bold my-1">{this.props.title} ({this.props.dueDate})</h3>
        {this.props.description}
      </div>
    );
  }
}

export default Task;
