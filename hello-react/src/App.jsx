import './App.css'
import TaskCard from './TaskCard'

function App() {

  return (
    <div className='w-full'>
      <div className="w-5/6 my-12 mx-auto">
        <h1 className='text-3xl my-4 font-semibold'>Smarter Tasks</h1>
        <h2 className='text-xl '>
          <span className='my-2 font-semibold'>Project: </span>Graduation Final Year Project (Revamp College Website)</h2>
        <div className='w-full flex p-4'>
          <div className='w-1/2 mx-4 font-semibold rounded-xl p-4  shadow-xl border '>
            <h1 className='text-xl  text-center my-2'>Pending</h1>
            <TaskCard title={"Build the website with static content"} dueDate={"10th April"} assigneeName={"Rohit S"}/>
            <TaskCard title={"Add a Blog"} dueDate={"22nd March"} assigneeName={"Rohit M"}/>
            <button className='p-1 rounded shadow-md mx-4 bg-green-500 text-white'> <i className='bx bx-plus'></i> New Task</button>
          </div>
          <div className='w-1/2 mx-auto font-semibold rounded-xl  p-4 shadow-xl border '>
            <h1 className='text-xl  text-center my-2'>Done</h1>
            <TaskCard title={"DEsign the mockup"} completedAtDate={"10th April"} assigneeName={"Rohit S"}/>
            <TaskCard title={"Get the approval from Principal"} completedAtDate={"20th April "} assigneeName={"Ajay S"}/>
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
