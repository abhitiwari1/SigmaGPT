import { useContext, useEffect } from 'react'
import './Sidebar.css'
import { MyContext } from './MyContext'
import {v1 as uuidv1} from 'uuid'

export default function Sidebar() {

  const {allThreads, setAllThreads, currThreadId, setNewChat, setPrompt, setReply, setCurrThreadId, setPrevChats} = useContext(MyContext);

  const getAllThreads = async () => {
    try {
      const response = await fetch("http://localhost:6000/api/thread");
      const res = await response.json();
      const filteredData = res.map(thread => ({threadId: thread.threadId, title: thread.title}));
      setAllThreads(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllThreads();
  }, [currThreadId]);

  const createNewChat = () => {
    setNewChat(true);
    setPrompt('');
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
  }

  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);

    try {
      const response = await fetch(`http://localhost:6000/api/thread/${newThreadId}`);
      const res = await response.json();
      setPrevChats(res);
      setNewChat(false);
      setReply(null);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteThread = async (threadId) => {
    try {
      const response = await fetch(`http://localhost:6000/api/thread/${threadId}`, {method: "DELETE"});
      await response.json();

      setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

      if(threadId === currThreadId){
        createNewChat();
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className='sidebar'>

      <button onClick={createNewChat}>
        <img src="src/assets/blacklogo.png" alt="gpt logo" className='logo'/>
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </button>

      <ul className='history'>
        {
          allThreads?.map((thread, idx) => {
            <li key={idx} onClick={(e) => changeThread(thread.threadId)} className={thread.threadId === currThreadId ? "highlighted" : " "}>
              {thread.title}<i className="fa-solid fa-trash"
              onClick={(e) => {
                e.stopPropagation(); // stop event bubbling
                deleteThread(thread.threadId);
              }}></i>
            </li>
          })
        }
      </ul>

      <div className="sign">
        <p>By Abhishek Tiwari &hearts; </p>
      </div>
      
    </section>
  )
}
