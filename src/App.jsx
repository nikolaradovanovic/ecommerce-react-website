import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Auth from "./pages/Auth.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
