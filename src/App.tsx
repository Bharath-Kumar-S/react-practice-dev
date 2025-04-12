import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h3 className="text-sky-700 text-2xl font-bold underline cursor-text text-center m-5">
        Tailwind !!!
      </h3>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
}

export default App;
