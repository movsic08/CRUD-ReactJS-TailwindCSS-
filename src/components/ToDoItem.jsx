
export default function ToDoItem() {
  return (
    <div className=" grid grid-flow-row mt-2 grid-cols-2 gap-4">
      <div className="p-4 drop-shadow bg-white text-slate-700 rounded-lg  col-span-2 lg:col-span-1  ">
        <h1 className="  font-semibold text-lg">
          Make something better
        </h1>
        <p className=" mt-1">
          everyday exercise hasdhasdhas
        </p>
        <div className="flex text-sm justify-between w-full items-center mt-2">
          <p>due on </p>
          <div className="flex gap-2">
            <button className=" p-2 rounded-lg bg-sky-600 text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.303 4.303a2.4 2.4 0 1 1 3.394 3.394l-.952.951-3.393-3.393.951-.952Zm-2.648 2.649L3.6 17.006V20.4h3.394L17.05 10.345l-3.396-3.393Z"></path>
              </svg>
            </button>
            <button className=" p-2 rounded-lg bg-red-600 text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.8 2.4a1.2 1.2 0 0 0-1.073.664L8.858 4.8H4.8a1.2 1.2 0 0 0 0 2.4v12a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4v-12a1.2 1.2 0 1 0 0-2.4h-4.058l-.87-1.736A1.2 1.2 0 0 0 13.2 2.4h-2.4ZM8.4 9.6a1.2 1.2 0 0 1 2.4 0v7.2a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v7.2a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
