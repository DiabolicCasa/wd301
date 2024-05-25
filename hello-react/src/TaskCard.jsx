// eslint-disable-next-line react/prop-types
const TaskCard = ({title, dueDate, completedAtDate, assigneeName}) => {
    const displayDate = completedAtDate  ? `Completed on: ${completedAtDate}` : `Due on: ${dueDate}`
  
    return (
      <div className='border rounded-xl mx-4 my-1  p-4 TaskItem'>
        <h2 className="text-xl font-medium">{title}</h2>
        {
            dueDate ? 
             <p>Due on: {dueDate}</p>
             : 
             <p>{displayDate}</p>
        }
        <p>Assignee: {assigneeName}</p>
      </div>
    )
  }
  
  export default TaskCard