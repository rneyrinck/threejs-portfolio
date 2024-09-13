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
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Hi, I’m Robert Neyrinck</p>
                            <p className="grid-subtext">


                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build
                                robust and scalable
                                applications
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
                                    size: 15
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Remote Development Worldwide</p>

                            <p className="grid-subtext font-bold">Digital nomad || stay at home cat dad</p>
                            <br/>
                            <p className="grid-subtext">Chicago based lead dev or collaborator ready to manage, collaborate, and grow with teams across
                                multiple timezones, countries, and sleep schedules.</p>
                            <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10"/></a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">What's Here and What Isn't</p>
                            <p className="grid-subtext">
                                Due to the nature of my work I'm unable to present all the proprietary code,
                                automations, and other exciting bits of software I've had a hand in building and
                                improving over the
                                years.
                            </p>
                            <br/>
                            <p className="grid-subtext">
                                With this in mind, look first to the
                                <a className="text-blue-500" href="#work"> "My Selected Work" </a>
                                section for joy-sparking UIs, AI integrations, and a feel for how my work will add to your
                                codebase.
                            </p>
                            <br/>
                            <p className="grid-subtext">
                                Then read what I've been working on in a professional setting in my
                                <a className="text-blue-500" href="#proprietaryImplementations"> "Proprietary Implementations" </a>
                                section, get some inspiration for what I'll start working on when I join the team,
                                and send an email, give me a call, or use my Gcal link to set up time to chat!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">robert.a.neyrinck@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
