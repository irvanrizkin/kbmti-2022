import React from "react";
import "../../css/custom.css";

function Hero() {
    return (
        <div className="w-full h-[calc(100vh-170px)] hero bg-slate-100 flex justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-sans uppercase font-semibold tracking-widest">
                Sthiraloka
            </h1>
        </div>
    );
}

export default Hero;
