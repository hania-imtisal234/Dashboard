import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar.js";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
