import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
