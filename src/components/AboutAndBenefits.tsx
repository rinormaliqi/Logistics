import { Icon } from "@iconify/react";
import Image from "next/image";

const AboutAndBenefits = () => {
    const staffMembers = [
        {
            name: "Fizioterapeut Gezim Zogu",
            image: "/gezim.jpeg",
            description: "Kontakto tani dhe merr trajtimin e duhur për problemin tënd me fizioterapi profesionale",
            specialties: ["+383 44 468 100"]
        },
        {
            name: "Fizioterapeut Butrint Shala",
            image: "/butrint.jpeg",
            description: "Kontakto tani dhe merr trajtimin e duhur për problemin tënd me fizioterapi profesionale",
            specialties: ["+383 44 468 100"]
        },
        {
            name: "Menagjere Administrative Genta Bllaca",
            image: "/genta.jpeg",
            description: "Kontakto tani dhe merr trajtimin e duhur për problemin tënd me fizioterapi profesionale",
            specialties: ["+383 44 468 100"]
        }
    ];

    return (
        <section
            id="about"
            className="bg-gradient-to-b from-green-50 via-gray-50 to-white dark:from-[#4cb0a8]/20 dark:via-gray-800 dark:to-gray-900 py-16"
        >
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-green-700 dark:text-green-300 text-base font-semibold flex items-center justify-center gap-2">
                        <Icon
                            icon="mdi:account-heart"
                            className="text-2xl text-green-600 dark:text-green-400"
                        />
                        Rreth Stafit Tonë
                    </p>
                    <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white mt-2">
                        Njihuni me Ekipin Tonë
                    </h2>
                    <p className="text-dark/60 dark:text-white/60 max-w-3xl mx-auto mt-4">
                        Ekipi ynë i fizioterapisë përbëhet nga profesionistë të kualifikuar me vite përvojë 
                        në ndihmën për pacientët për të rikuperuar lëvizshmërinë, reduktuar dhimbjen 
                        dhe përmirësuar cilësinë e jetës.
                    </p>
                </div>

                {/* Staff Cards Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {staffMembers.map((member, index) => (
                        <div 
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-green-100 dark:border-green-700/30 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            {/* Staff Image */}
                            <div className="relative h-60">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                            </div>
                            
                            {/* Staff Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-dark/70 dark:text-white/70 mb-4">
                                    {member.description}
                                </p>
                                
                                {/* Specialties */}
                                <div className="mt-4">
                                    <h4 className="text-green-700 dark:text-green-400 font-medium mb-2 flex items-center gap-2">
                                        <Icon icon="mdi:phone" className="text-lg" />
                                        Telefono:
                                    </h4>
                                    <ul className="space-y-2">
                      {member.specialties.map((specialty, idx) => (
  <li
    key={idx}
    className="flex items-start gap-2 text-dark/70 dark:text-white/70 hover:text-green-600 dark:hover:text-green-400 transition duration-200"
  >
    <a
      href={`tel:${specialty.replace(/\s/g, '')}`}
      className="flex items-start gap-2"
    >
      <Icon
        icon="mdi:phone"
        className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
      />
      <span>{specialty}</span>
    </a>
  </li>
))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Benefits Section */}
                <div className="mt-16 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-green-100 dark:border-green-700">
                    <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6 text-center">
                        Pse Pacientët na Zgjedhin Ne
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-4 text-dark/80 dark:text-white/80">
                            <li className="flex items-start gap-3">
                                <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl mt-0.5" />
                                <span>Mbi 15 vite përvojë kolektive në fizioterapi</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl mt-0.5" />
                                <span>Plane trajtimi të personalizuara për çdo pacient</span>
                            </li>
                        </ul>
                        <ul className="space-y-4 text-dark/80 dark:text-white/80">
                            <li className="flex items-start gap-3">
                                <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl mt-0.5" />
                                <span>Pajisje moderne dhe të avancuara për rehabilitim</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon icon="mdi:check-circle" className="text-green-600 dark:text-green-400 text-xl mt-0.5" />
                                <span>Kujdes i ngrohtë, mbështetës dhe miqësor</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAndBenefits;