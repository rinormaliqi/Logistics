import { Icon } from "@iconify/react";
import Image from "next/image";

const AboutAndBenefits = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 grid lg:grid-cols-2 gap-12 items-center">

        {/* Doctor Image */}
        <div className="flex justify-center">
          <Image
            src="/images/physio/doc.jpg"
            alt="Dr. Sarah Thompson"
            width={500}
            height={600}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2.5 items-center">
              <span>
                <Icon
                  icon="mdi:account-heart"
                  width={22}
                  height={22}
                  className="text-green-600"
                />
              </span>
              <p className="text-base font-semibold text-dark/75">
                About the Doctor & Benefits
              </p>
            </div>
            <h2 className="text-40 lg:text-52 font-medium text-black tracking-tight leading-11 mb-2">
              Meet Dr. Sarah Thompson
            </h2>
            <p className="text-xm font-normal text-black/50 max-w-2xl">
              With over 15 years of experience in physiotherapy, Dr. Thompson has
              helped thousands of patients recover from injuries, manage chronic
              pain, and improve their mobility. Her approach combines evidence-based
              treatments with a compassionate, patient-centered philosophy.
            </p>
            <p className="text-xm font-normal text-black/50 max-w-2xl">
              Whether you’re recovering from surgery, healing from a sports injury, 
              or managing a long-term condition, Dr. Thompson and her team will 
              create a personalised treatment plan to get you moving again.
            </p>
          </div>

          {/* Benefits List */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">
              Why Patients Choose Us
            </h3>
            <ul className="space-y-4 text-black/80">
              <li className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="text-green-600 text-xl" />
                <span>Over 15 Years of Physiotherapy Experience</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="text-green-600 text-xl" />
                <span>Tailored, Individual Treatment Plans</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="text-green-600 text-xl" />
                <span>State-of-the-Art Rehab Equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="text-green-600 text-xl" />
                <span>Warm, Supportive, and Friendly Care</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndBenefits;

