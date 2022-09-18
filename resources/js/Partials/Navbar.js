import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/FrontPage/NavLink";
import ResponsiveNavLink from "@/Components/FrontPage/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

function Navbar() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-[85rem] mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link
                                href="/"
                                className="tracking-wider font-[verdana] text-2xl"
                            >
                                <strong>KBMTI</strong> 2022
                            </Link>
                        </div>
                    </div>
                    <div className="hidden space-x-0 sm:-my-px sm:ml-10 sm:flex">
                        <div className="self-center">
                            <NavLink href={route("dashboard")} active={false}>
                                HOME
                            </NavLink>
                        </div>
                        <div className="self-center">
                            <NavLink href={route("dashboard")} active={false}>
                                ABOUT
                            </NavLink>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {/* humbergur icon */}
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />

                                {/* cross icon */}
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
