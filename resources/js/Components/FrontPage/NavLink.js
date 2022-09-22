import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active = false, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-5 py-2 text-medium font-medium leading-5 text-white bg-black focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                    : "inline-flex items-center px-5 py-3 text-medium font-medium leading-5 bg-transparent text-black hover:text-white hover:bg-black focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
