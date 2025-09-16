// import './ChatWindow.css'
// import Chat from './Chat.jsx'
// import { MyContext } from './MyContext.jsx'
// import { useContext, useEffect, useState } from 'react'
// import {ScaleLoader} from 'react-spinners'

// export default function ChatWindow() {

//   const {prompt, setPrompt, reply, setReply, currThreadId, prevChats, setPrevChats, setNewChat} = useContext(MyContext);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);


//   const getReply = async() => {
//     setIsLoading(true);
//     setNewChat(false);
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json"
//       },
//       body: JSON.stringify({
//         message: prompt,
//         threadId:currThreadId
//       })
//     };

//     try {
//       const response = await fetch("http://localhost:6000/api/chat", options);
//       const res = await response.json();
//       setReply(res.reply);
//     } catch (error) {
//       console.log(error)
//     }
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     if(prompt && reply){
//       setPrevChats(prevChats => {
//         [...prevChats, {
//           role: "user",
//           content: prompt
//         }, {
//           role: "assistant",
//           content: reply
//         }]
//       });
//     }
//     setPrompt("");
//   }, [reply]);

//   const handleProfileClick = () => {
//     setIsOpen(!isOpen);
//   }


//   return (
//     <div className='chatWindow'>
//       <div className="navbar">
//         <span>SigmaGPT <i className="fa-solid fa-chevron-down"></i></span>
//         <div className="userIconDiv" onClick={handleProfileClick}>
//           <span className='userIcon'><i className="fa-solid fa-user"></i></span>
//         </div>
//       </div>
//       {
//         isOpen && 
//         <div className="dropDown">
//           <div className="dropDownItems"><i class="fa-solid fa-gear"></i>Settings</div>
//           <div className="dropDownItems"><i class="fa-solid fa-cloud-arrow-up"></i>Upgrade Plan</div>
//           <div className="dropDownItems"><i class="fa-solid fa-arrow-right-from-bracket"></i>Log out</div>
//         </div>
//       }

//       <Chat/>

//       <ScaleLoader color='#fff' loading={isLoading}></ScaleLoader>
//       <div className="chatInput">
//         <div className="inputBox">
//           <input placeholder='Ask Anything' 
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' ? getReply(): ''}
//           />

//           <div id='submit' onClick={() => {
//             getReply();
//           }}><i className="fa-solid fa-paper-plane"></i></div>
//         </div>
//         <p className='info'>
//           SigmaGPT can make mistakes. Check important info. See Cookie Preferences.
//         </p>
//       </div>
//     </div>
//   )
// }
