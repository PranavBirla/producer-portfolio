import React from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "../pages/Portfolio";
import DevPortfolio from "../pages/DevPortfolio";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/dev" element={<DevPortfolio />} />
        </Routes>
    );
};

export default AppRoutes;