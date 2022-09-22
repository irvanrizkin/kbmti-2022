import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-gray-800 w-full py-20 text-white">
            <div className="flex flex-wrap justify-center gap-5 sm:gap-40 font-[proxima-nova] ml-6 sm:ml-0">
                <div className="w-full sm:w-auto flex flex-col gap-2">
                    <Link href={"/home"}>
                        <a className=" font-semibold leading-5 tracking-wide">
                            KBMTI FILKOM 2022
                        </a>
                    </Link>
                    <Link href={"/home"}>
                        <a>Home</a>
                    </Link>
                    <Link href={"/#"}>
                        <a>About</a>
                    </Link>
                </div>
                <div className="w-full sm:w-auto flex flex-col gap-y">
                    <Link href={"/home"}>
                        <div className="flex gap-3 items-center">
                            <FaInstagram className="text-2xl" />
                            <span>kbmti_ub</span>
                        </div>
                    </Link>
                    <Link href={"/home"}>
                        <div className="flex gap-3 items-center">
                            <FaYoutube className="text-2xl" />
                            <span>KBMTI UB</span>
                        </div>
                    </Link>
                    <Link href={"/#"}>
                        <div className="flex gap-3 items-center">
                            <FaLinkedin className="text-2xl" />
                            <span>LinkedIn</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="text-center mt-10">
                <span>© KBMTI 2022 – Privacy Policy</span>
            </div>
        </div>
    );
}

export default Footer;
