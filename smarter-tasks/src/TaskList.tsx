import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (idx: number) => void;
}

// class TaskList extends React.Component<Props> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         dueDate={task.dueDate}
//         description={task.description}
//         title={task.title}
//       />
//     ));
//   }
// }

const TaskList = (props: Props) => {
  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li className="flex justify-between" key={idx}>
          <Task 
            key={idx}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
          />
           <button className="deleteTaskButton " onClick={()=>{props.deleteTask(idx)}}>
        <i className="bg-red-600 rounded hover:bg-red-700 text-white p-4 bx bxs-trash"></i>
      </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
