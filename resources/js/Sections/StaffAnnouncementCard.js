import React from "react";

function StaffAnnouncementCard({ dataStaff }) {
    return (
        <div className="w-full sm:w-3/5 mb-24 lg:mb-0 lg:h-[720px] lg:overflow-y-hidden flex flex-col mx-auto px-5 py-8 ">
            <h2 className="text-3xl font-[verdana] mb-10 text-center">
                PENGUMUMAN HASIL SELEKSI STAFF MUDA KBMTI 2022
            </h2>

            <div className="w-full border-[1px] rounded-md p-3 sm:p-8">
                <div className="flex gap-x-10 sm:gap-x-24 mb-10">
                    <div className="flex-col ">
                        <div>Nama</div>
                        <div>NIM</div>
                        <div>Id Line</div>
                        <div>No HP</div>
                    </div>
                    <div className="flex-col">
                        <div>: {dataStaff.name}</div>
                        <div>: {dataStaff.nim}</div>
                        <div>: {dataStaff.id_line}</div>
                        <div>: {dataStaff.no_hp || <i>kosong</i>}</div>
                    </div>
                </div>

                <div className="flex flex-wrap ">
                    {dataStaff.status == "failed" && (
                        <div className="w-full mx-auto">
                            <h2
                                className={`py-5 text-center font-bold text-white font-sans tracking-widest bg-bermuda w-full mb-6`}
                            >
                                BELUM LOLOS
                            </h2>
                            <p className="mx-auto">
                                <strong>
                                    Maaf kamu belum beruntung tahun ini.
                                </strong>{" "}
                                <br />
                                Semoga beruntung di lain waktu. 😊🙌
                            </p>
                        </div>
                    )}
                    {/*  */}
                    {dataStaff.status == "pass" && (
                        <div className="w-full mx-auto">
                            <h2 className="py-5 text-center font-bold text-white font-sans tracking-widest bg-green-400 w-full mb-6">
                                LOLOS
                            </h2>
                            <h4 className="text-center font-sans font-black text-lg">
                                Selamat, kamu lolos test menjadi Staff Muda
                                KBMTI 2022.
                            </h4>
                            <br />
                            <p className="text-center">
                                Pastikan kamu mengecek email kamu untuk
                                informasi lebih lanjut. Semangat berproses 😍
                            </p>
                        </div>
                    )}
                    {dataStaff.status == "pending" && (
                        <div className="w-full mx-auto text-center font-bold">
                            Data kamu masih diproses, mohon bersabar ya.. 🙏
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StaffAnnouncementCard;
