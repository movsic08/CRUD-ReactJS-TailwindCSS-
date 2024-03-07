
export default function ToDoItem() {
  return (
    <div className=" grid grid-flow-row mt-2 grid-cols-2 gap-3">
      <div className="p-3 drop-shadow bg-white text-slate-700 rounded-lg  col-span-2 lg:col-span-1  ">
        <h1 className="  font-semibold text-lg">
          Make something better
        </h1>
        <p className=" mt-1">
          everyday exercise hasdhasdhas
        </p>
        <div className="flex text-sm justify-between w-full items-center mt-2">
          <p>due on </p>
          <div className="flex gap-2">
            <button>edit</button>
            <button>del</button>
          </div>
        </div>
      </div>

      <div className="p-4 drop-shadow bg-white text-slate-700 rounded-lg  col-span-2 lg:col-span-1  ">
        2
      </div>

    </div>
  )
}
