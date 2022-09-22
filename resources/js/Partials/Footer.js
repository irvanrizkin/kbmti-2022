import React from "react";
import { Link } from "@inertiajs/inertia-react";
import InstagramIcon from "/icons/instagram.svg";
import YoutubeIcon from "/icons/youtube.svg";
import Linkedin from "/icons/linkedin.svg";

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
                <div className="w-full sm:w-auto flex flex-col">
                    <Link href={"/home"}>
                        <div className="flex gap-3 items-center">
                            <img
                                src={InstagramIcon}
                                height={30}
                                width={30}
                                style={{ background: "white" }}
                            />
                            {/* <InstagramIcon /> */}
                            <span>kbmti_ub</span>
                        </div>
                    </Link>
                    <Link href={"/home"}>
                        <div className="flex gap-3 items-center">
                            <img
                                src={YoutubeIcon}
                                alt=""
                                height={30}
                                width={30}
                                style={{ background: "white" }}
                            />
                            {/* <YoutubeIcon /> */}
                            <span>KBMTI UB</span>
                        </div>
                    </Link>
                    <Link href={"/#"}>
                        <div className="flex gap-3 items-center">
                            <img
                                src={Linkedin}
                                alt=""
                                height={30}
                                width={30}
                                style={{ background: "white" }}
                            />
                            {/* <Linkedin /> */}
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
