import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
