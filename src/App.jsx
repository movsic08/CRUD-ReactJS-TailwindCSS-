// import './App.css';
import "./index.css";
import React from 'react';
import { Navbar, ToDoItem, AddTaskModal } from './components';

function App() {
  return (
    <div className=" bg-slate-100 font-poppinsw-screen h-screen  text-slate-800">
      <div className="container ">
        <Navbar />
        <h3 className=" mt-2  text-slate-700">React JS + Firebase Realtime DB + Tailwind CSS</h3>
        <div className="flex w-full items-center justify-between mt-2 border-t-2 border-slate-100 py-1">
          <h1 className=" font-bold">Your to do list</h1>
          <button className=" px-2 py-1 bg-sky-700 text-white rounded-md">Add</button>
        </div>
        
        {/* <AddTaskModal /> */}
        <ToDoItem />
      </div>
    </div>
  );
}

export default App;
