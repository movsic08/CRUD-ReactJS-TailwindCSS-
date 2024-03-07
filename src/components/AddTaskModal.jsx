
export default function AddTaskModal() {
    return (
        <div >
            <div className="fixed inset-0 z-50  h-full w-full bg-gray-300 bg-opacity-25 backdrop-blur-sm">
                <div className="flex items-start justify-center w-full">
                    <div className="bg-white rounded-md  mt-11 p-2 w-[35%] drop-shadow-sm">
                        <div className="font-bold w-full flex items-center justify-between text-slate-800">
                            <h1>Add task</h1>
                            <button>X</button>
                        </div>
                        <div className="flex mt-2">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}