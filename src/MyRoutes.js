import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
