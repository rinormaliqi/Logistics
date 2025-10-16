import { Icon } from "@iconify/react";

const ConditionsTreated = () => {
const conditions = [
  "Terapi Manuale",
  "Elektroterapi",
  "Kiropraktike",
  "Rehabilitim post Kirurgjikal",
  "Rehabilitim Sportiv",
  "Rehabilitim Postural",
  "Terapi Ushtrimore",
  "Pressoterapi",
  "Dry cupping",
  "Konsulte Fizioterapeutike",
];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        
        {/* Seksioni i Header-it */}
        <div id="services" className="mb-16 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <span>
              <Icon
                icon="mdi:medical-bag"
                width={22}
                height={22}
                className="text-green-600"
              />
            </span>
            <p className="text-base font-semibold text-dark/75">
              Gjendjet që Trajtojmë
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black text-center tracking-tight leading-11 mb-2">
            Të ndihmojmë të lëvizni më mirë, të jetoni më mirë.
          </h2>
          <p className="text-xm font-normal text-black/50 text-center max-w-2xl mx-auto">
            Ndihmojmë pacientët të rikuperohen dhe të rifitojnë lëvizshmërinë nga një gamë e gjerë lëndimesh dhe gjendjesh shëndetësore.
          </p>
        </div>

        {/* Rrjeti i Gjendjeve */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {conditions.map((condition, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-green-800 font-medium shadow-md border border-green-100 
              hover:shadow-xl hover:border-green-300 transition-all duration-300 ease-out text-center"
            >
              {condition}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsTreated;
