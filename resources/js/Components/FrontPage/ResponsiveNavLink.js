import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function ResponsiveNavLink({
    method = "get",
    as = "a",
    href,
    active = false,
    children,
}) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={
                active
                    ? "w-full px-8 py-3 items-center text-medium font-medium leading-5 text-black bg-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                    : "w-full items-center px-8 py-3 text-medium font-medium leading-5 bg-transparent text-white hover:text-gray-400 hover:bg-black focus:outline-none focus:text-gray-700 focus:border-gray-400 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
