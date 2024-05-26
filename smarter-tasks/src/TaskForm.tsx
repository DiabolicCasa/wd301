import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       dueDate: "",
//       error: "",
//     };
//   }

//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const { title, description, dueDate } = this.state;

//     if (!title || !dueDate) {
//       this.setState({ error: "Title and Due Date are required." });
//       return;
//     }

//     const newTask = {
//       title,
//       description,
//       dueDate,
//     };

//     this.props.addTask(newTask);
//     this.setState({ title: "", description: "", dueDate: "", error: "" });
//   };

//   // handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//   //   const { name, value } = e.target;
//   //   this.setState({ [name]: value });
//   // };
//   handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     this.setState({ title: e.target.value });
//   };
//   handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     this.setState({ description: e.target.value });
//   };
//   handleDateChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     this.setState({ dueDate: e.target.value });
//   };

//   render() {
//     return (
//       <form onSubmit={this.addTask} className="">
//         <input
//           type="text"
//           placeholder="Title"
//           required
//           id="todoTitle"
//           name="title"
//           value={this.state.title}
//           onChange={this.handleTitleChange}
//           className="border border-slate-300 w-full rounded-md mt-2 p-2"
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           id="todoDescription"
//           name="description"
//           value={this.state.description}
//           onChange={this.handleDescriptionChange}
//           className="border border-slate-300 w-full mt-2 rounded-md p-2"
//         />

//         <input
//           type="date"
//           placeholder="Due Date"
//           required
//           id="todoDueDate"
//           name="dueDate"
//           value={this.state.dueDate}
//           onChange={this.handleDateChange}
//           className="border border-slate-300 w-full mt-2 rounded-md p-2"
//         />

//         {this.state.error && <p className="text-red-500">{this.state.error}</p>}
//         <button
//           type="submit"
//           id="addTaskButton"
//           className="bg-green-500 text-white mt-2 rounded-md py-2 px-4"
//         >
//           Add Task
//         </button>
//       </form>
//     );
//   }
// }

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };
  return (
    <form onSubmit={addTask}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="todoTitle"
            type="text"
            required
            value={formState.title}
            onChange={titleChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="todoTitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="todoDescription"
            type="text"
            value={formState.description}
            onChange={descriptionChanged}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="todoDescription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            value={formState.dueDate}
            onChange={dueDateChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="todoDueDate"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Due Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            type="submit"
            id="addTaskButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
