import React from "react";
import Navbar from "@/Partials/Navbar";

function FrontPageLayout({ children }) {
    return (
        <div className="">
            <Navbar />

            <main>{children}</main>
        </div>
    );
}

export default FrontPageLayout;
