import { Icon } from "@iconify/react";
import Image from "next/image";

const ClinicTour = () => {
  const images = [
    { src: "/images/physio/rec.jpeg", alt: "Reception area" },
    { src: "/images/physio/treatment-room.jpg", alt: "Treatment room" },
    { src: "/images/physio/gym.jpg", alt: "Rehab gym" },
    { src: "/images/physio/equipments.jpg", alt: "Physiotherapy equipment" },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Header Section */}
        <div className="mb-16 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <span>
              <Icon
                icon="mdi:hospital-building"
                width={22}
                height={22}
                className="text-green-600"
              />
            </span>
            <p className="text-base font-semibold text-dark/75">
              Clinic Tour
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black text-center tracking-tight leading-11 mb-2">
            Take a look inside our clinic
          </h2>
          <p className="text-xm font-normal text-black/50 text-center max-w-2xl mx-auto">
            We’ve designed our space to make you feel comfortable and supported throughout your recovery journey.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={350}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicTour;
