import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
  return (
    <div>
      404 Message
      <button id='backToHomeButton' onClick={()=>{
        navigate("/home")
      }}>Back To Home</button>
    </div>
  )
}

export default NotFound
