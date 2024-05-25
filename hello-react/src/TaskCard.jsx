// eslint-disable-next-line react/prop-types
const TaskCard = ({title, dueDate, completedAtDate, assigneeName}) => {

    return (
      <div className='border mx-4 my-1 rounded p-4 TaskItem'>
        <h2 className="text-xl font-medium">{title}</h2>
        {
            dueDate ? 
             <p>Due on: {dueDate}</p>
             : 
             <p>Completed on: {completedAtDate}</p>
        }
        <p>Assignee: {assigneeName}</p>
      </div>
    )
  }
  
  export default TaskCard