import FrontPageLayout from "@/Layouts/FrontPageLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

function ComingSoon(props) {
    return (
        <FrontPageLayout>
            <Head title="KBMTI" />
            <div className="w-full h-[calc(100vh-54px)] bg-slate-100 flex justify-center items-center">
                <h1 className="text-[verdana] text-4xl text-black uppercase font-bold tracking-wide">
                    Coming Soon
                </h1>
            </div>
        </FrontPageLayout>
    );
}

export default ComingSoon;
