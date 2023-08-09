import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./MainRoutes";

const App = () => {
    return (
        <>
            <Navbar />
            <MainRoutes />
            <Footer />
        </>
    );
};

export default App;
