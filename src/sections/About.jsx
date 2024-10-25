/* eslint-disable react/no-unescaped-entities */
import {useState} from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' robert.a.neyrinck@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/picObob.png" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Hi, I’m Robert Neyrinck</p>
                            <p className="grid-subtext">As a seasoned software engineer and startup co-founder,
                                blending creativity and technical expertise to build innovative solutions. From scalable
                                web applications to AI-driven platforms, I specialize in turning complex challenges into
                                functional, impactful systems. My journey spans diverse industries, making me adaptable
                                and ready to tackle any project with a "get it done" mentality.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/skillsection.png" alt="grid-2"
                             className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I’m fluent in a wide range of technologies, enabling me to create high-performance,
                                reliable applications. My expertise includes JavaScript, TypeScript, Node.js, Python,
                                Django, PostgreSQL, Redis, and more. Whether it’s front-end development, back-end
                                architecture, or database optimization, I choose the right tools to deliver results
                                efficiently.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 41,
                                    lng: -87.39,
                                    text: 'Chicago, Illinois',
                                    color: 'white',
                                    size: 80
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Remote Development Worldwide</p>
                            <p className="grid-subtext">
                                I’m adept at working with teams and clients across the globe, seamlessly navigating
                                remote environments. My focus on clear communication, proactive problem-solving, and
                                agile project management ensures that distance is never a barrier. I’m committed to
                                delivering on time, every time, no matter where I’m working from.
                            </p>

                            <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10"/></a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container h-full flex flex-col">
                        <img
                            src="assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />
                        <div className="flex-grow">
                            <p className="grid-headtext">Philosophy of Design</p>
                            <p className="grid-subtext">
                                My design philosophy is simple yet impactful: start with functionality, iterate with
                                creativity, and never let perfect be the enemy of progress. I believe in a practical,
                                hands-on approach to problem-solving—get a working solution first, then refine and
                                polish it to excellence. By focusing initially on core functionality, I ensure a solid
                                foundation upon which innovation can flourish. I value efficiency and adaptability,
                                striving to make sure that everything I build is not only effective but also a pleasure
                                to use. My goal is to create solutions that are intuitive, reliable, and exceed user
                                expectations, delivering both performance and delight.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container h-full flex flex-col">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="flex-grow flex flex-col justify-center">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    robert.a.neyrinck@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
