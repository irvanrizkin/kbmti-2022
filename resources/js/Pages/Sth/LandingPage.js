import FrontPageLayout from "@/Layouts/FrontPageLayout";
import { Head } from "@inertiajs/inertia-react";
import Hero from "@/Sections/Hero";
import React from "react";

function LandingPage(props) {
    return (
        <FrontPageLayout>
            <Head title="Home" />
            <div className="overflow-x-hidden">
                <Hero />
                <div className="my-28 w-full md:w-10/12 lg:w-6/12 sm:mx-auto">
                    <h2 className="font-thin font-[proxima-nova] text-3xl md:text-[2.5rem]  text-center tracking-wide">
                        Bergabungnya dua kata indah Sthira dan Loka merupakan
                        harapan untuk EMTI
                    </h2>
                </div>
                <div className="flex flex-col">
                    {/* VISI EMTI */}
                    <div className="w-full px-10 md:w-5/12 sm:ml-auto md:mx-44 my-20 self-end">
                        <h2 className="mb-7 md:text-right text-3xl font-semibold text-center">
                            Visi
                        </h2>
                        <div>
                            <p className="text-xl leading-10 text-center md:text-right">
                                Bergabungnya dua kata indah Sthira dan Loka
                                merupakan harapan untuk EMTI EMTI sebagai wadah
                                untuk merangkai asa dan karya dengan rasa solid
                                berlandaskan kekeluargaan untuk mencapai makna
                                sebenarnya dari berhimpun.
                            </p>
                        </div>
                    </div>
                    {/* MISI EMTI */}
                    <div className="w-full px-10 md:w-5/12  md:mx-44 my-20">
                        <h2 className="mb-7 text-3xl font-semibold text-center md:text-left">
                            Misi
                        </h2>
                        <div>
                            <ul className="text-xl leading-10 text-center md:text-left">
                                <li>
                                    Membangun suasana EMTI yang harmonis, solid,
                                    dan berdedikasi tinggi
                                </li>
                                <li>
                                    Menciptakan ruang bagi mahasiswa teknologi
                                    infomrasi untuk aktif bersuara dalam
                                    menggapai asa
                                </li>
                                <li>
                                    Optimalisasi layanan Advokasi yang
                                    responsive dan proaktif dalam
                                    mensejahterakan Teknologi Informasi
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
            </div>
        </FrontPageLayout>
    );
}

export default LandingPage;
