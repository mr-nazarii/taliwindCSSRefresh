import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-400">
      <div className="w-[100%] md:w-max px-15 m-5 p-10 bg-slate-300 rounded-xl shadow-md cursor-default flex flex-col-reverse md:flex-row items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 text-center md:text-left my-3 hover:text-cyan-500 duration-300">
            Hello TailwindCSS!
          </h1>
          <p className="text-2xl text-center md:text-left text-purple-700  my-3">
            This is a refresher tutorial
          </p>
          <div className="flex gap-5 justify-center md:justify-start">
            <button className="btn">Yeah!</button>
            <button className="btn bg-red-500 hover:bg-red-700">
              Let's Do It!
            </button>
          </div>
        </div>
        <img
          className="w-60 h-max mx-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
          alt="tailwind"
        />
      </div>
    </div>
  );
}

export default App;
