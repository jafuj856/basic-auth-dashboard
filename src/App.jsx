import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./layout/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./protectedRoutes/PublicRoute";
import PrivateRoute from "./protectedRoutes/PrivateRoute";
import UnderMaintenance from "./pages/UnderMaintenance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<PrivateRoute />}>
          <Route path="" element={<Home />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/date" element={<UnderMaintenance />} />
          </Route>
        </Route>
        <Route path="" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<UnderMaintenance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
