import { Icon } from "@iconify/react";
import Image from "next/image";

const AboutAndBenefits = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-green-50 via-gray-50 to-white dark:from-[#4cb0a8]/20 dark:via-gray-800 dark:to-gray-900 py-16"
        >
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                    
                    {/* Imazhi Majtas */}
                    <div className="lg:h-full h-auto flex">
                        <Image
                            src="/images/physio/doc.jpg"
                            alt="Dr. Sarah Thompson"
                            width={680}
                            height={800}
                            className="object-cover w-full h-full rounded-2xl shadow-lg"
                            unoptimized={true}
                        />
                    </div>

                    {/* Përmbajtja Djathtas */}
                    <div className="lg:px-12 flex flex-col justify-center">
                        <p className="text-green-700 dark:text-green-300 text-base font-semibold flex gap-2">
                            <Icon
                                icon="mdi:account-heart"
                                className="text-2xl text-green-600 dark:text-green-400"
                            />
                            Rreth Stafit
                        </p>
                        <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white mt-2">
                            Njihuni me Dr. Filan Fisteku
                        </h2>
                        <p className="text-dark/60 dark:text-white/60 pr-0 md:pr-20 mt-4">
                            Me mbi 15 vite përvojë në fizioterapi, Dr. Filani ka ndihmuar
                            mijëra pacientë të shërohen nga lëndimet, të menaxhojnë dhimbjet
                            kronike dhe të përmirësojnë lëvizshmërinë e tyre. Qasja e saj
                            kombinon trajtimet e bazuara në prova shkencore me një filozofi
                            të kujdesshme dhe të përqendruar tek pacienti.
                        </p>
                        <p className="text-dark/60 dark:text-white/60 pr-0 md:pr-20 mt-4">
                            Qoftë pas një operacioni, pas një lëndimi sportiv apo për menaxhimin
                            e një gjendjeje afatgjatë, Dr. Filani dhe ekipi i saj do të krijojnë
                            një plan trajtimi të personalizuar për tju rikthyer në lëvizje.
                        </p>

                        {/* Lista e Përfitimeve */}
                        <div className="my-8 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-green-100 dark:border-green-700">
                            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6">
                                Pse Pacientët na Zgjedhin Ne
                            </h3>
                            <ul className="space-y-4 text-dark/80 dark:text-white/80">
                                <li className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl" />
                                    <span>Mbi 15 vite përvojë në fizioterapi</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl" />
                                    <span>Plane trajtimi të personalizuara për çdo pacient</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl" />
                                    <span>Pajisje moderne dhe të avancuara për rehabilitim</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl" />
                                    <span>Kujdes i ngrohtë, mbështetës dhe miqësor</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAndBenefits;
