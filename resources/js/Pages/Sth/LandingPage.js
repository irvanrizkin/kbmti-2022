import FrontPageLayout from "@/Layouts/FrontPageLayout";
import { Head } from "@inertiajs/inertia-react";
import Hero from "@/Sections/Hero";
import React from "react";

function LandingPage(props) {
    return (
        <FrontPageLayout>
            <Head title="Home" />
            <div>
                <Hero />
                <div className="my-28 w-6/12 mx-auto">
                    <h2 className="font-thin font-[proxima-nova] text-[2.5rem]  text-center tracking-wide">
                        Bergabungnya dua kata indah Sthira dan Loka merupakan
                        harapan untuk EMTI
                    </h2>
                </div>
                {/* VISI EMTI */}
                <div className="w-5/12 ml-auto mx-56 my-20">
                    <h2 className="mb-7 text-center text-3xl font-semibold">
                        Visi
                    </h2>
                    <div>
                        <p className="text-xl leading-10 text-right">
                            Bergabungnya dua kata indah Sthira dan Loka
                            merupakan harapan untuk EMTI EMTI sebagai wadah
                            untuk merangkai asa dan karya dengan rasa solid
                            berlandaskan kekeluargaan untuk mencapai makna
                            sebenarnya dari berhimpun.
                        </p>
                    </div>
                </div>
                {/* MISI EMTI */}
                <div className="w-5/12 mx-56 my-20">
                    <h2 className="mb-7 text-center text-3xl font-semibold">
                        Misi
                    </h2>
                    <div>
                        <ul className="text-xl leading-10 ">
                            <li>
                                Membangun suasana EMTI yang harmonis, solid, dan
                                berdedikasi tinggi
                            </li>
                            <li>
                                Menciptakan ruang bagi mahasiswa teknologi
                                infomrasi untuk aktif bersuara dalam menggapai
                                asa
                            </li>
                            <li>
                                Optimalisasi layanan Advokasi yang responsive
                                dan proaktif dalam mensejahterakan Teknologi
                                Informasi
                            </li>
                            <li>
                                Menciptakan lingkungan yang supportif dan
                                kolaboratif agar tercipta solidaritas yang
                                berkelanjutan.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </FrontPageLayout>
    );
}

export default LandingPage;
