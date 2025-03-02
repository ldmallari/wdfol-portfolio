import React from "react";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Nav from "./Nav";
import '../assets/styles/about.css'

const About = () => {

  return (
    <>
    <Nav/>
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-[#050709]" id="services">
        <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#DDDDDD] mb-2 block text-lg font-semibold">
                What I Offer
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]" id="p-h2">
                  My Quality Services
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                I provide a range of professional services customized to meet your needs, ensuring quality results and a seamless experience.
                </p>
              </div>
            </div>
        </div>
        <div className="flex flex-col px-[15vw] items-center">
        <div className="bg-transparent h-[400px] max-w-[50vw] w-[100%] rounded-lg relative group flex flex-col p-4 overflow-hidden group">
            <div className="flex-grow w-full relative overflow-hidden z-0">
                
                <div className="absolute z-0 left-0 w-full h-full flex">
                    <div className="content-scroll absolute left-0 right-0">

                        <div className="fixed left-6 w-[1px] h-[calc(100%-153px)] bg-zinc-600/40"></div>

                        <div className="pl-16">

                            <div className="h-[225px] flex items-center justify-center">
                                <div className="w-full mr-6 bg-[#070709] rounded-md border-zinc-600 border-opacity-40 border flex flex-col p-3 relative z-30 isolate">
                                    <div className="absolute -left-[44px] top-1/2 -translate-y-1/2 h-[1px] bg-zinc-600 w-[44px] opacity-70"></div>
                                    <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 h-[10px] w-[10px] bg-purple-600 border-zinc-600 border rounded-full"></div>
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center border border-zinc-600 border-opacity-40 w-12 h-12 rounded-md relative overflow-hidden">
                                                    
                                                    <img src="https://www.hau.edu.ph/images/logo-circle.png" alt="Holy Angel University Logo" />
                                                </div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="text-zinc-100 font-medium">BSIT Specialized in Web Development</div>
                                                    <div className="text-zinc-400 text-sm">July 2022 - Present</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 border-l-2 border-purple-600/30 pl-3">
                                            <div className="text-purple-600 text-sm italic">Holy Angel University, Pampanga</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[225px] flex items-center justify-center">
                                <div className="w-full mr-6 bg-[#070709] rounded-md border-zinc-600 border-opacity-40 border flex flex-col p-3 relative z-30 isolate">
                                    <div className="absolute -left-[44px] top-1/2 -translate-y-1/2 h-[1px] bg-zinc-600 w-[44px] opacity-70"></div>
                                    <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 h-[10px] w-[10px] bg-purple-500 border-zinc-600 border rounded-full"></div>
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center border border-zinc-600 border-opacity-40 w-12 h-12 rounded-md relative overflow-hidden">
                                                    
                                                    <img src="https://www.hau.edu.ph/images/logo-circle.png" alt="Holy Angel University Logo" />
                                                </div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="text-zinc-100 font-medium">Senior High School</div>
                                                    <div className="text-zinc-400 text-sm">June 2020 - April 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 border-l-2 border-purple-600/30 pl-3">
                                            <div className="text-purple-600 text-sm italic">Holy Angel University, Pampanga</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[225px] flex items-center justify-center">
                                <div className="w-full mr-6 bg-[#070709] rounded-md border-zinc-600 border-opacity-40 border flex flex-col p-3 relative z-30 isolate">
                                    <div className="absolute -left-[44px] top-1/2 -translate-y-1/2 h-[1px] bg-zinc-600 w-[44px] opacity-70"></div>
                                    <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 h-[10px] w-[10px] bg-purple-600 border-zinc-600 border rounded-full"></div>
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center border border-zinc-600 border-opacity-40 w-12 h-12 rounded-md relative overflow-hidden">
                                                    
                                                    <img src="https://www.hau.edu.ph/images/logo-circle.png" alt="Holy Angel University Logo" />
                                                </div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="text-zinc-100 font-medium">BSIT Specialized in Web Development</div>
                                                    <div className="text-zinc-400 text-sm">July 2022 - Present</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 border-l-2 border-purple-600/30 pl-3">
                                            <div className="text-purple-600 text-sm italic">Holy Angel University, Pampanga</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[225px] flex items-center justify-center">
                                <div className="w-full mr-6 bg-[#070709] rounded-md border-zinc-600 border-opacity-40 border flex flex-col p-3 relative z-30 isolate">
                                    <div className="absolute -left-[44px] top-1/2 -translate-y-1/2 h-[1px] bg-zinc-600 w-[44px] opacity-70"></div>
                                    <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 h-[10px] w-[10px] bg-purple-500 border-zinc-600 border rounded-full"></div>
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center border border-zinc-600 border-opacity-40 w-12 h-12 rounded-md relative overflow-hidden">
                                                    
                                                    <img src="https://www.hau.edu.ph/images/logo-circle.png" alt="Holy Angel University Logo" />
                                                </div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="text-zinc-100 font-medium">Senior High School</div>
                                                    <div className="text-zinc-400 text-sm">June 2020 - April 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 border-l-2 border-purple-600/30 pl-3">
                                            <div className="text-purple-600 text-sm italic">Holy Angel University, Pampanga</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-[#050709] to-transparent z-20"></div>
                <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-[#050709] to-transparent z-20"></div>
            </div>
        </div>
        </div>
        
        {/* <div className="circlePosition w-[300px] h-[300px] bg-[#8750f7] rounded-[100%] absolute z-[-1] top-[150%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div> */}
    </section>
    <Skills/>
    <Certificates/>
    </>
  );
};

export default About;