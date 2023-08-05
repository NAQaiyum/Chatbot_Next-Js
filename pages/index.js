import { useState } from 'react';

export default function Home() {
  const [user, setuser] = useState('');
  const [bot, setbot] = useState('');
  const [chatbot,setchatbot]=useState([])

  const fetchchatbot=async()=>{
    const response=await fetch('/api/chatbot')
    const data=await response.json()
    setchatbot(data)
  }


  return (
    <div>  
      
  
        <div>
        <h1>User</h1>
        <form>
        <label htmlFor="bot">Send:</label>
        <input type="text" id="bot" value={bot} onChange={(e) => setbot(e.target.value)} required /><br /><br />
        </form>
        <p><strong>Entered data from Bot :</strong>{user}</p><br />
        </div>


        <div>
        <h1>Bot</h1>
        <form>
        <label htmlFor="user">Send:</label>
        <input type="text" id="user" value={user} onChange={(e) => setuser(e.target.value)} required /><br /><br />
        </form>
        <p><strong>Entered data from User :</strong>{bot}</p><br /><br />
        </div> 
    

        <button onClick={fetchchatbot} id = 'button'>Load Save Data </button>
        {
            chatbot.map(chat=>{
            return(
              <div>{chat.text}</div>)
              }
            )
      
        }
    </div>
    )
}