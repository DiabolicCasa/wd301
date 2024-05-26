import { TaskItem } from "./types";

// interface TaskProp {
//     title: string;
//     description: string;
// }

const Task = (props : TaskItem) => {
  
  return (
    <div className="TaskItem p-2  w-full rounded-md  list-none shadow-md border border-slate-100">
     
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
     
  );
};

export default Task;
