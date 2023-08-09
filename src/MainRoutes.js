import React from "react";
import { Route, Routes } from "react-router-dom";
import Charester from "./components/Charester";
import Host from "./components/Host";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/charester" element={<Charester />} />
            <Route path="/" element={<Host />} />
        </Routes>
    );
};

export default MainRoutes;
