import React from "react";

export default function Button({
    type = "text",
    className = "",
    variant = "fill",
    clickHandler,
    processing,
    children,
}) {
    const variants = {
        fill: "bg-bermuda hover:bg-rose-400 border border-transparent text-white ",
        outline:
            "bg-transparent border border-bermuda hover:bg-bermuda text-bermuda hover:text-white",
    };

    let pickedVariant = variants[variant];

    return (
        <button
            type={type}
            onClick={clickHandler}
            className={
                `${pickedVariant} inline-flex items-center px-6 py-2 rounded-md transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
