// import './App.css';
import "./index.css";
import React, { useState } from 'react';
import { Navbar, ToDoItem, AddTaskModal } from './components';


function App() {

  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const openModal = () => setAddModalOpen(true);
  const closeModal = () => setAddModalOpen(false);

  return (
    <div className=" bg-slate-100 font-poppinsw-screen h-screen  text-slate-800">
      <div className="container ">
        <Navbar />
        <h3 className=" mt-2  text-slate-700">React JS + Firebase Realtime DB + Tailwind CSS</h3>
        <div className="flex w-full items-center justify-between mt-2 border-t-2 border-slate-100 py-1">
          <h1 className=" font-bold text-2xl text-slate-700">Your to do list</h1>
          <button onClick={openModal} className=" px-2 py-1 bg-sky-700 flex items-center gap-2 text-white rounded-md">
            <svg className=" w-4 h-4 text-sky-700 bg-white rounded-full  " fill="currentColor " stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>Add</button>
        </div>

        <AddTaskModal isOpen={isAddModalOpen}  isCloseModal={closeModal}/>
        <ToDoItem />
      </div>
    </div>
  );
}

export default App;
