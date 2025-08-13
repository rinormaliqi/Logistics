import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na Kontaktoni | Fizioterapi Gleamer",
};

export default function ContactUs() {
  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="mb-16">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <span>
            <Icon
              icon={"mdi:medical-bag"}
              width={20}
              height={20}
              className="text-green-600"
            />
          </span>
          <p className="text-base font-semibold text-green-700 dark:text-green-300">
            Kontaktoni Klinikën Tonë
          </p>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            Keni nevojë për fizioterapi apo ndihmë në rikuperim?
          </h3>
          <p className="text-xm font-normal tracking-tight text-black/60 dark:text-white/60 leading-6">
            Pavarësisht nëse keni nevojë për rikuperim nga lëndime, trajtim të dhimbjeve kronike apo mbështetje për lëvizshmëri,
            fizioterapistët tanë ekspertë janë këtu për tju ndihmuar.
          </p>
        </div>
      </div>

      {/* Seksioni i Formës */}
      <div className="border border-green-200 dark:border-green-800 rounded-2xl p-4 shadow-xl bg-gradient-to-br from-green-50 via-gray-50 to-white dark:from-green-900/20 dark:via-gray-900 dark:to-gray-950">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Fotoja */}
          <div className="relative w-full lg:w-[55%] aspect-[3/4] lg:aspect-auto lg:h-[700px]">
            <Image
              src="/images/physio/hero3.jpg"
              alt="Ndihmë Fizioterapike"
              fill
              className="rounded-2xl object-cover shadow-lg"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl p-6 lg:p-12 flex flex-col justify-between">
              <div>
                <h5 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
                  Ekipi ynë Mjekësor
                </h5>
                <p className="text-base md:text-lg font-normal text-white/80 max-w-md">
                  Bisedoni direkt me një fizioterapist ose rezervoni konsultimin tuaj fillestar.
                </p>
              </div>
              <div className="flex flex-col gap-6 text-white">
                <Link href={"tel:+38344695321"} className="w-fit">
                  <div className="flex items-center gap-4 group w-fit">
                    <Icon
                      icon={"ph:phone"}
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
                      +383 44 468 100
                    </p>
                  </div>
                </Link>
                <Link href={"mailto:office@gleamerphysio.com"} className="w-fit">
                  <div className="flex items-center gap-4 group w-fit">
                    <Icon
                      icon={"ph:envelope-simple"}
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
                      info@fizioterapi.com
                    </p>
                  </div>
                </Link>
                <div className="flex items-center gap-4">
                  <Icon
                    icon={"ph:map-pin"}
                    width={32}
                    height={32}
                    className="flex-shrink-0"
                  />
                  <p className="text-lg font-normal">
                    Qendra e Fizioterapisë Bio Center, Prishtinë, Kosovë
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Forma */}
          <div className="w-full lg:w-[45%] flex items-center">
            <div className="w-full">
              <h4 className="text-2xl md:text-3xl font-medium mb-8 text-black dark:text-white">
                Rezervoni një Takim
              </h4>
              <form>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Emri i Plotë*"
                      required
                      className="px-6 py-4 border border-green-200 dark:border-green-800 rounded-full outline-green-500 focus:outline w-full"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Numri i Telefonit*"
                      required
                      className="px-6 py-4 border border-green-200 dark:border-green-800 rounded-full outline-green-500 focus:outline w-full"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="px-6 py-4 border border-green-200 dark:border-green-800 rounded-full outline-green-500 focus:outline"
                  />
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Na tregoni për lëndimin tuaj, dhimbjet ose nevojat për rikuperim."
                    required
                    className="px-6 py-4 border border-green-200 dark:border-green-800 rounded-2xl outline-green-500 focus:outline min-h-[180px]"
                  ></textarea>
                  <button className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold w-full mobile:w-fit transition-colors duration-300">
                    Dërgo Kerkesën
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Harta Google */}
      <div className="mt-16 w-full h-[650px] rounded-2xl overflow-hidden shadow-lg border border-green-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.559268305933!2d21.160087!3d42.663355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe97bac593cb2754c!2sPhysiotherapy%20Bio%20Center%20-%20Fizioterapi!5e0!3m2!1sen!2s!4v1693488400000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
