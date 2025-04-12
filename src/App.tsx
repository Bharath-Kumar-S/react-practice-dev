import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { PublcHolidays } from "./pages/PublcHolidays";

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
            <>
              <Link to={"/public-holidays"}>Public Holidays</Link>
            </>
          }
        />
        <Route path="/public-holidays" element={<PublcHolidays />} />
      </Routes>
    </>
  );
}

export default App;
