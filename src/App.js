import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
