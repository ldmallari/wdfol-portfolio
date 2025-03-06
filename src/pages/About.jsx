import React from "react";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Nav from "./Nav";
import '../assets/styles/about.css'

const About = () => {

  return (
    <>
    <div className="bg-[#050709]">
    <Nav/>
    </div>
    <section className="bg-[#050709] mx-auto px-6 pt-16 pb-28 flex flex-col items-center text-center">
        <h1 id='herosp' className="mb-2 text-4xl font-bold !leading-[1.208] text-[#DDDDDD] sm:text-[42px] lg:text-[40px] xl:text-1xl">
        I am Levin
        </h1>
        <h2 className="herohdr text-9xl text-gray-400 mb-2">Full-Stack Web Developer</h2>
        
        <p className="mb-6 max-w-[480px] text-base text-body-color text-dark-6">
        I specialize in creating dynamic, responsive, and user-friendly web applications. With experience in front-end and back-end development, I build seamless digital experiences that bring ideas to life.
        </p>

        <div className="flex gap-3 mb-6">
            <a href="https://github.com/yourusername" target="_blank"
            className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white transition duration-500 hover:text-[#8750f7] hover:border-[#8750f7]">
            <i className="fab fa-github text-lg"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank"
            className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white transition duration-500 hover:text-[#8750f7] hover:border-[#8750f7]">
            <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a href="mailto:your-email@example.com"
            className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white transition duration-500 hover:text-[#8750f7] hover:border-[#8750f7]">
            <i className="fas fa-envelope text-lg"></i>
            </a>
            <a href="tel:+1234567890"
            className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white transition duration-500 hover:text-[#8750f7] hover:border-[#8750f7]">
            <i className="fas fa-comment-dots text-lg"></i>
            </a>
        </div>

        <a href="mailto:your-email@example.com" 
            className="bg-[#8750f7] border border-[#8750f7] text-white rounded-full px-8 py-3.5 text-sm font-medium transition duration-500 hover:bg-transparent hover:text-[#8750f7]">
            Let's Talk!
        </a>
    </section>
    <section className="relative overflow-hidden py-7 bg-[#8750f7]">
        <div className="whitespace-nowrap flex items-center animate-scroll">
            <span className="text-white text-2xl font-bold flex items-center space-x-6">
            <span>DEVELOPMENT</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>GRAPHIC DESIGN</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>UI/UX</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>FRONT-END</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>BACK-END</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>SEO</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>AUTOMATION</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            </span>

            <span className="text-white text-2xl font-bold flex items-center space-x-6">
            <span>DEVELOPMENT</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>GRAPHIC DESIGN</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>UI/UX</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>FRONT-END</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>BACK-END</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>SEO</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            <span>AUTOMATION</span>
            <span className="spin-asterisk text-[#8750f7]"><svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        </span>
            </span>
        </div>
    </section>
    <script src="https://kit.fontawesome.com/yourkitcode.js" crossOrigin="anonymous"></script>

    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#050709]">
        <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#DDDDDD] mb-2 block text-lg font-semibold">
                My Education
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]" id="p-h2">
                Academic Background
                </h2>
                <p className="text-body-color text-base text-dark-6">
                A glimpse into my educational journey, highlighting the knowledge and skills I`ve gained along the way.
                </p>
              </div>
            </div>
        </div>
        <div className="flex flex-col px-[15vw] items-center">
        <div className="bg-transparent h-[400px] max-w-[40vw] min-w-[350px] w-[100%] rounded-lg relative group flex flex-col p-4 overflow-hidden group">
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
                                                    
                                                    <img src="/images/logos/hau.png" alt="Holy Angel University Logo" />
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
                                                    
                                                    <img src="/images/logos/hau.png" alt="Holy Angel University Logo" />
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
                                                    
                                                    <img src="/images/logos/hau.png" alt="Holy Angel University Logo" />
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
                                                    
                                                    <img src="/images/logos/hau.png" alt="Holy Angel University Logo" />
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