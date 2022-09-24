import FrontPageLayout from "@/Layouts/FrontPageLayout";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import { FaArrowCircleRight } from "react-icons/fa";

function RegisterStaffMuda() {
    return (
        <FrontPageLayout>
            <div className="my-16 px-10">
                <h1 className="text-center text-3xl md:text-4xl font-sans">
                    Pendaftaran Staff Muda
                </h1>

                <div className="flex flex-wrap w-full md:max-w-[85rem] mx-auto gap-10 items-center my-16">
                    <form
                        className="w-full md:w-6/12 flex flex-col gap-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <p>
                            Staff Muda adalah salah satu dunia yang indah selama
                            ini menjadi salah satu bukti kehancuran dunia nyata
                            dan abadi bagai kenyataan selama ini
                        </p>

                        <div className="">
                            <Label className={"text-lg "}>Nama</Label>
                            <Input
                                name={"Nama"}
                                placeholder="Nama"
                                className={"w-full"}
                            />
                        </div>
                        <div>
                            <Label className="text-lg">NIM</Label>
                            <Input
                                name={"NIM"}
                                placeholder="NIM"
                                className="w-full"
                            />
                        </div>
                        <div>
                            <Label forInput={"Departemen"} className="text-lg">
                                Departemen
                            </Label>
                            <select
                                id="Departemen"
                                className="appearance-none w-full rounded-lg border border-gray-300 text-gray-500"
                            >
                                <option
                                    className="px-6 py-3 text-gray-300"
                                    value=""
                                >
                                    Departemen
                                </option>

                                <option className="px-6 py-3" value="RnC">
                                    Research and Creative
                                </option>
                                <option className="px-6 py-3" value="RnD">
                                    Research and Development
                                </option>
                                <option className="px-6 py-3" value="SE">
                                    Social Environment
                                </option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="flex gap-3">
                                <FaArrowCircleRight />
                                Daftar
                            </Button>
                        </div>
                    </form>
                    <div className="w-full md:w-5/12 flex justify-center order-first md:order-last">
                        <img
                            src="/img/staffmuda.jpg"
                            alt="staff muda ilustrasi"
                        />
                    </div>
                </div>
            </div>
        </FrontPageLayout>
    );
}
export default RegisterStaffMuda;
