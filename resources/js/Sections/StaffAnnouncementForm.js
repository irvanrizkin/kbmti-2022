import Button from "@/Components/Button";
import Input from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import { FiAlertCircle } from "react-icons/fi";

import React, { useState } from "react";

export default function StaffAnnouncementForm({ error }) {
    const [nim, setNim] = useState(null);
    const [uniqueCode, setUniqueCode] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        setNim(null);
        setNim(null);
        Inertia.post(`/staff-muda/announcement`, {
            nim: nim,
            unique_code: uniqueCode,
        });
    };
    return (
        <div className="px-5 py-3 pt-32 mb-32 lg:m-0 lg:h-[720px] md:overflow-y-hidden flex flex-col items-center gap-y-6">
            <h2 className="text-xl sm:text-3xl font-[verdana] mb-2 text-center">
                PENGUMUMAN HASIL SELEKSI STAFF MUDA KBMTI 2022
            </h2>
            <p>Masukan nim kamu di bawah buat cek hasil kamu yaa...</p>
            {error && (
                <div className="bg-bermuda p-4 text-white rounded-md">
                    <FiAlertCircle className="inline text-2xl mr-3" />
                    {error}
                </div>
            )}
            <form
                onSubmit={submit}
                className="flex flex-col gap-5 w-full sm:w-80 mt-10"
            >
                <div className="w-full">
                    <Input
                        placeholder="2251507001323"
                        name="nim"
                        className={"w-full"}
                        handleChange={(e) => setNim(e.target.value)}
                    />
                </div>
                <div className="w-full ">
                    <Input
                        placeholder="cl992ha0"
                        name={"unique_code"}
                        className={"w-full"}
                        handleChange={(e) => setUniqueCode(e.target.value)}
                    />
                </div>
                <div>
                    <Button type="submit" className="w-full">
                        Cari
                    </Button>
                </div>
            </form>
        </div>
    );
}
