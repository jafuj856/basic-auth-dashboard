import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./layout/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import IfLoged from "./protectedRoutes/IfLoged";
import NotLoged from "./protectedRoutes/NotLoged";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IfLoged />}>
          <Route path="" element={<Home />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="" element={<NotLoged />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
