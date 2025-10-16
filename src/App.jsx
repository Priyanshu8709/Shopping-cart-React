import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="bg-slate-900">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
