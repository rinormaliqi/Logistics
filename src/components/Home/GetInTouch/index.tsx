import Link from 'next/link';

const GetInTouch: React.FC = () => {
    return (
        <section>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="relative rounded-t-2xl overflow-hidden">
                    <video
                        className="w-full absolute top-0 left-0 object-cover -z-10"
                        autoPlay
                        loop
                        muted
                        aria-label="Video background showing logistics in motion"
                    >
                        <source
                            src="/videos/video2.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div className="bg-black/40 lg:py-64 md:py-32 py-16">
                        <div className="flex flex-col items-center gap-8 text-center">
                            <h2 className='text-white lg:text-52 md:text-40 text-3xl max-w-3/4 font-semibold'>
                                Fast. Reliable. Seamless Logistics Solutions You Can Count On.
                            </h2>
                            <Link
                                href="#contact"
                                className='bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white transition duration-300'
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
                    <div className="flex items-center gap-40 animate-slide">
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            SAME-DAY DELIVERY SERVICES ACROSS THE COUNTRY!
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            CUSTOMIZED LOGISTICS SOLUTIONS FOR YOUR BUSINESS NEEDS!
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            TRACK YOUR SHIPMENTS IN REAL-TIME, ANYTIME!
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            REDUCE SHIPPING COSTS WITH OUR OPTIMIZED ROUTING SOLUTIONS!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
