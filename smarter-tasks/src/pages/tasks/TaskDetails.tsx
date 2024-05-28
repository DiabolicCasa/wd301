/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import { useParams, useNavigate } from "react-router-dom";
import { useMembersState } from "../../context/members/context";

import { useForm, SubmitHandler } from "react-hook-form";
import { useTasksDispatch, useTasksState } from "../../context/task/context";
import { updateTask } from "../../context/task/actions";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { useProjectsState } from "../../context/projects/context";
import { TaskDetailsPayload } from "../../context/task/types";
import {
  useCommentDispatch,
  useCommentsState,
} from "../../context/comment/context";
import { addComment, fetchComments } from "../../context/comment/actions";

type TaskFormUpdatePayload = TaskDetailsPayload & {
  selectedPerson: string;
};
// Helper function to format the date to YYYY-MM-DD format
const formatDateForPicker = (isoDate: string) => {
  const dateObj = new Date(isoDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Format the date as per the required format for the date picker (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
};

const TaskDetails = () => {
  const memberState = useMembersState();
  const [isOpen, setIsOpen] = useState(true);
  const [newComment, setNewComment] = useState("");

  const { projectID, taskID } = useParams<{
    projectID: string;
    taskID: string;
  }>();

  const commentState = useCommentsState();
  const commentDispatch = useCommentDispatch();

  useEffect(() => {
    if (projectID && taskID) {
      fetchComments(commentDispatch, projectID, taskID);
    }
  }, [commentDispatch, projectID, taskID]);

  const navigate = useNavigate();

  // Extract project and task details.
  const projectState = useProjectsState();
  const taskListState = useTasksState();
  const taskDispatch = useTasksDispatch();

  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )[0];

  const selectedTask = taskListState.projectData.tasks[taskID ?? ""];
  // Use react-form-hook to manage the form. Initialize with data from selectedTask.
  const [selectedPerson, setSelectedPerson] = useState(
    selectedTask.assignedUserName ?? ""
  );
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TaskFormUpdatePayload>({
    defaultValues: {
      title: selectedTask.title,
      description: selectedTask.description,
      selectedPerson: selectedTask.assignedUserName,
      dueDate: formatDateForPicker(selectedTask.dueDate),
    },
  });

  if (!selectedProject) {
    return <>No such Project!</>;
  }

  function closeModal() {
    setIsOpen(false);
    navigate("../../");
  }

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  // Clear the input field after submitting
  if(projectID&&taskID){
    addComment(commentDispatch,projectID,taskID,newComment)
  }
    setNewComment(""); 

  };

  const onSubmit: SubmitHandler<TaskFormUpdatePayload> = async (data) => {
    const assignee = memberState?.members?.filter(
      (member) => member.name === selectedPerson
    )?.[0];
    updateTask(taskDispatch, projectID ?? "", {
      ...selectedTask,
      ...data,
      assignee: assignee?.id,
    });
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-4/6 h-2/3  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Task Details
                  </Dialog.Title>
                  <div className="mt-2 w-full flex justify between ">
                    <form
                      className="w-1/2 border rounded-md  p-2 mr-2"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        type="text"
                        required
                        placeholder="Enter title"
                        id="title"
                        {...register("title", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Enter description"
                        id="description"
                        {...register("description", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <input
                        type="date"
                        required
                        placeholder="Enter due date"
                        id="dueDate"
                        {...register("dueDate", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <h3>
                        <strong>Assignee</strong>
                      </h3>
                      <Listbox
                        value={selectedPerson}
                        onChange={setSelectedPerson}
                      >
                        <Listbox.Button className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 text-base text-left">
                          {selectedPerson}
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 max-h-60 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {memberState?.members.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={person.name}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mt-10 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Update
                      </button>
                      <button
                        type="submit"
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                    <div className="w-1/2 border rounded-md  p-4">
                      {commentState.isLoading ? (
                        "Comments Loading"
                      ) : (
                        <div className="h-full flex flex-col">
                          <div className=" overflow-y-auto">
                            {commentState.comments.length === 0 ? (
                              <h1>No Comments</h1>
                            ) : (
                              <>
                                {commentState.comments
                                  .map((com) => (
                                    <div
                                      key={com.id}
                                      className="border p-2 mb-2 rounded comment"
                                    >
                                      <div className="flex items-center">
                                        <span className="font-semibold text-sm mr-2">
                                          {com.User.name}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                          {new Date(
                                            com.createdAt
                                          ).toLocaleString()}
                                        </span>
                                      </div>
                                      <p className="text-sm">{com.description}</p>
                                    </div>
                                  ))}
                              </>
                            )}
                          </div>
                          <div className="mt-auto">
                            <form
                              className="flex items-center bg-white rounded-lg "
                              onSubmit={handleAddComment}
                            >
                              <textarea
                              id="commentBox"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a new comment..."
                                className="flex-grow border-none bg-gray-100 rounded-md py-2 px-4 mr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                                rows={2}
                              />
                              <button
                              id="addCommentBtn"
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                              >
                                Add Comment
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TaskDetails;
