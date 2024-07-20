import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Billing from "./components/Billing";
import { ViewBill } from "./components/ViewBill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage({ handleLogin }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (password) => {
    // Check if the password is correct
    if (password === "37403") {
      setLoggedIn(true);
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  };

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss 
        draggable
        pauseOnHover
        theme="light"
      />
      {loggedIn ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/ViewBill" element={<ViewBill />} />
          </Routes>
        </Router>
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )} */}
      <h1></h1>
    </>
  );
}

export default App;
