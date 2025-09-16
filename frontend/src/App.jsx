// import './App.css'
// import Sidebar from './components/Sidebar';
// import ChatWindow from './components/ChatWindow';
// import {MyContext} from './components/MyContext.jsx'
// import { useState } from 'react';
// import {v1 as uuidv1} from 'uuid';

// function App() {
//   const [prompt, setPrompt] = useState('');
//   const [reply, setReply] = useState(null);
//   const [currThreadId, setCurrThreadId] = useState(uuidv1());
//   const [prevChats, setPrevChats] = useState([]); //store prev chats of same threads
//   const [newChat, setNewChat] = useState(true);
//   const [allThreads, setAllThreads] = useState([]);


//   const providerValues = {
//     prompt, setPrompt,
//     reply, setReply,
//     currThreadId, setCurrThreadId,
//     prevChats, setPrevChats,
//     newChat, setNewChat,
//     allThreads, setAllThreads
//   };

//   return (
//     <div className='app'>
//       <MyContext.Provider value = {providerValues}>
//         <Sidebar/>
//         <ChatWindow/>
//       </MyContext.Provider>
      
//     </div>
//   )
// }

// export default App
