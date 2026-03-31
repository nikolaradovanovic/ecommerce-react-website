import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Auth from "./pages/Auth.jsx";
import Navbar from "./components/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
