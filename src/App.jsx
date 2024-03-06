// import './App.css';
import "./index.css";
import React from 'react';
import { Navbar } from './components';

function App() {
  return (
    <div className=" bg-slate-50 font-poppinsw-screen h-screen  text-slate-800">
      <div className="container ">
        <Navbar />
        <h3 className=" mt-2">React JS + Firebase Realtime DB + Tailwind CSS</h3>
        <div className="flex w-full items-center justify-between mt-2 border-t-2 border-slate-100 py-1">
          <h1>Your to do list</h1>
          <button className=" px-3 py-2 bg-sky-700 text-white rounded-md">Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
