import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { PublcHolidays } from "./pages/PublcHolidays";
import { Accordion } from "./pages/Accordion";
import { TodoLocalStorage } from "./pages/TodoLocalStorage";

function App() {
  return (
    <>
      <h3 className="text-sky-700 text-2xl font-bold cursor-text text-center m-5">
        React practice dev
      </h3>

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center gap-4">
              <Link to={"/public-holidays"}>Public Holidays</Link>
              <Link to={"/accordion"}>Accordion</Link>
              <Link to={"/todo-local-storage"}>Todo Local Storage</Link>
            </div>
          }
        />
        <Route path="/public-holidays" element={<PublcHolidays />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/todo-local-storage" element={<TodoLocalStorage />} />
      </Routes>
    </>
  );
}

export default App;
