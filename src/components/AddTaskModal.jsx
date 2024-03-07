import React from "react";

const AddTaskModal = ({ isOpen, isCloseModal }) => {
    return (
        <div >
            {isOpen && (
                <div className="fixed inset-0 z-50  h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm">
                    <div className="flex items-start justify-center w-full">
                        <div className="bg-white rounded-lg  mt-11 p-4 w-[35%] drop-shadow-sm transform transition-all">
                            <div className="font-bold w-full flex items-center justify-between text-slate-800">
                                <h1 className=" text-2xl">Add task</h1>
                                <button onClick={isCloseModal} className="bg-red-600 p-1 duration-500 ease-in-out hover:bg-red-800 rounded-full">
                                    <svg className=" h-4 w-4  text-white " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex mt-3">
                                <div className="w-full">
                                    <label for="first_name" class="block mb-1  font-medium text-gray-900 dark:text-white">Task</label>
                                    <textarea type="text" id="first_name" class="bg-gray-50 b   order border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's your task..." required />
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-end mt-3">
                                <button className="  bg-sky-600 text-white  font-medium px-3 py-1 rounded-lg">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTaskModal;