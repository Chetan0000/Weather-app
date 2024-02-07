import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DaysPage from "./pages/DaysPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home/day" element={<DaysPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
