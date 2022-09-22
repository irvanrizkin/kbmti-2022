import React from "react";
import Navbar from "@/Partials/Navbar";
import Footer from "@/Partials/Footer";

function FrontPageLayout({ children }) {
    return (
        <div className="">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default FrontPageLayout;
