import TaskCard from './TaskCard'
import React from 'react'

function App() {

  return (
    <>
      <div className='flex p-24 justify-center'>

        <div className=" m-5 w-5/6 self-center ">

          <h1 className="font-bold text-2xl">Smarter Tasks</h1>
          <h1 className=" text-xl">Project: Graduation Final Year Project (Revamp College Website)</h1>

          <div className='m-5 flex'>

            <div className='w-1/2 border shadow-md mx-2 rounded-xl'>
              <h2 className='p-5 font-bold text-xl '>Pending</h2>
              <TaskCard title="Build website with static content" completedAtDate="" dueDate="10th April" assigneeName="Rohit S" />
              <TaskCard title="Add a Blog" dueDate="22nd March" completedAtDate="" assigneeName="Rohit M" />
              <h3 className=" w-11/12 m-2 p-1 border " ><i className='bx bx-plus'></i> New task</h3>
            </div>

            <div className='w-1/2 border shadow-md mx-2 rounded-xl'>
              <h2 className='p-5 font-bold text-xl '>Done</h2>
              <TaskCard  title="Design the mockup" dueDate="" completedAtDate="10th April" assigneeName="Rohit M" />
              <TaskCard title="Add a Blog" dueDate="" completedAtDate="20th April" assigneeName="Ajay S" />

            </div>



          </div>

        </div>
      </div>
    </>
  )
}

export default App
