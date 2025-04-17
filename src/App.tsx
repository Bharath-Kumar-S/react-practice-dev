import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { PublcHolidays } from "./pages/PublcHolidays";
import { Accordion } from "./pages/Accordion";

function App() {
  return (
    <>
      <h3 className="text-sky-700 text-2xl font-bold underline cursor-text text-center m-5">
        React practice dev
      </h3>

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center">
              <Link to={"/public-holidays"}>Public Holidays</Link>
              <Link to={"/accordion"}>Accordion</Link>
            </div>
          }
        />
        <Route path="/public-holidays" element={<PublcHolidays />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </>
  );
}

export default App;
