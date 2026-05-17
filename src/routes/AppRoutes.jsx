import React from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "../pages/Portfolio";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
        </Routes>
    );
};

export default AppRoutes;