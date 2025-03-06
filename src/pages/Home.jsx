import Nav from './Nav';
import Portfolio from './Portfolio';
import '../assets/styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {faDownload } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Services from './Services';

const Counter = ({ start = 0, end, duration = 2000 }) => {
    const [count, setCount] = useState(start);
  
    useEffect(() => {
      let startTime = null;
  
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
  
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
  
      window.requestAnimationFrame(step);
  
      return () => window.cancelAnimationFrame(step);
    }, [start, end, duration]);
  
    return <h1>{count}</h1>;
  };
export default function Home() {
    return (
        <>
            <Nav/>
            <div id='mb-img' className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                    <div id="hero-img" className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                        src="/images/hero.jpg"
                        alt="hero"
                        className="max-w-auto lg:ml-auto"
                    />
                    </div>
                </div>
            </div>
            <div className="relative bg-white pb-[90px] pt-[120px] lg:pt-[150px]" id="heropage">
                
                <div className="container">
                <div className="-mx-4 flex" id='hero-sect'>
                    <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                        <h1 id='herosp' className="mb-2 text-4xl font-bold !leading-[1.208] text-[#DDDDDD] sm:text-[42px] lg:text-[40px] xl:text-1xl">
                        I am Levin
                        </h1>
                        <h1 className='herohdr'>Full-Stack Web Developer</h1>
                        <p className="mb-8 max-w-[480px] text-base text-body-color text-dark-6">
                        I break down complex user experience problems to create integrity focussed solutions that connect billions of people
                        </p>
                        <div className='btn-socials'>
                        <ul id="hero-btns" className="flex flex-wrap items-center">
                        <li>
                            <a
                            href="/about"
                            id="about-btn" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-normal text-white hover:bg-blue-dark lg:px-7"
                            >
                            About me
                            </a>
                        </li>
                        <li className='dl-resume'>
                            <a
                            href="../src/assets/files/LDM-Resume.pdf"
                            id="dl-resume" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-normal text-white"
                            download>
                            <FontAwesomeIcon icon={faDownload} className='faDownload'/>Download Resume
                            </a>
                        </li>
                        <li className='faDownload'>
                            <a
                            href="../src/assets/files/resume.txt"
                            id="dl-resume" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-normal text-white"
                            download>
                            <FontAwesomeIcon icon={faDownload} className='faDownload-inner'/>Resume</a>
                        </li>
                        </ul>
                        <div className="flex items-center space-x-4" id='social-i'>
                            <a href="https://www.facebook.com/levin.mallari" target='_blank'><FontAwesomeIcon icon={faFacebookF} className="facebook"/></a>
                            <a href="https://github.com/ldmallari" target='_blank'><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            <a href="https://www.linkedin.com/in/levin-mallari/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className="linkedin"/></a>
                        </div>
                        </div>
                        <div className="clients pt-10"/>
                    </div>
                    </div>
                    <div className="circlePosition w-[300px] h-[300px] bg-[#8750f7] rounded-[100%] absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>
                    {/* <div className="circlePosition w-[150px] h-[150px] bg-[#8750f7] rounded-[100%] absolute z-[-1] top-[1%] left-[95%] translate-x-[-50%] translate-y-[-50%] blur-[120px]"></div> */}
                    {/* <div className="hidden px-4 lg:block lg:w-1/12"></div> */}
                    <div id='desk-img' className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div id="hero-img" className="relative z-10 inline-block pt-11 lg:pt-0">
                            <img
                                src="/images/hero.jpg"
                                alt="hero"
                                className="max-w-auto lg:ml-auto"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='exps'>
                    <div className="flex flex-wrap items-center justify-center" id="exp-section">
                        <div className='hero-texts'>
                            <div className='head-par'>
                            <Counter end={4}/>
                            <p>Years of Experience</p>
                            </div>
                        </div>
                        <div className='hero-texts'>
                            <div className='head-par'><div className='testcounter'>
                            <Counter end={20}/><h1>+</h1></div>
                            <p>Project Completed</p>
                            </div>
                        </div>
                        <div className='hero-texts'>
                            <div className='head-par'><div className='testcounter'>
                            <Counter end={50}/><h1>+</h1></div>
                            <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Services/>
            <Portfolio/>
            <div className="bg-[#050709]">
                <section className="max-w-7xl mx-auto w-full px-10 py-20">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-[#DDDDDD] mb-2 block text-lg font-semibold">
                            Client Testimonials
                            </span>
                            <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]" id="p-h2">
                            What My Clients Say
                            </h2>
                            <p className="text-body-color text-base text-dark-6">
                            I take pride in delivering high-quality work that meets my clients' needs. Here’s what they have to say about working with me.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
                    <div
                        className="border p-7 rounded-xl bg-transparent drop-shadow-md border-[#2C1557] col-span-2 flex flex-col gap-y-10 justify-between"><a href="https://www.fiverr.com/yujii_" target='_blank'>
                        <div className="flex flex-col gap-y-3.5">
                        <p className="font-bold text-xl text-white">title</p>
                        <p className="font-base text-white text-sm mb-4">
                            Levin is a highly professional coder and a pleasure to work with. He ensured that the Discord bot functioned flawlessly and without any issues, demonstrating his attention to detail and technical expertise. Throughout our collaboration, Levin was proactive in identifying potential challenges and quick to address any problems that arose. His communication skills and commitment to delivering high-quality work made the entire process smooth and efficient. I highly recommend him for any coding projects and look forward to working with him again in the future.
                        </p>
                        </div>
                        <div className="flex flex-col"><img src="/images/user1.png" alt="Emily Smith" className="h-10 w-10"/>
                        <p className="pt-2 text-sm font-semibold text-white">gamingwithga179</p>
                        <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-slate-100/70">Client - </p>
                            
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            </div>
                        </div>
                        </div></a>
                    </div>
                    <div
                        className="border p-7 rounded-xl bg-transparent drop-shadow-md border-[#2C1557] col-span-3 flex flex-col gap-y-10 justify-between"><a href="https://www.fiverr.com/yujii_" target='_blank'>
                        <div className="flex flex-col gap-y-3.5">
                        <p className="font-bold text-xl text-white">
                            title
                        </p>
                        <p className="font-base text-white text-sm mb-4">
                            desc
                        </p>
                        </div>
                        <div className="flex flex-col"><img src="/images/user2.png" alt="Michael Johnson" className="h-10 w-10"/>
                        <p className="pt-2 text-sm font-semibold text-white">Name</p>
                        <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-slate-100/70">Client - </p>
                            
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            </div>
                        </div>
                        </div></a>
                    </div>
                    <div
                        className="border p-7 rounded-xl bg-transparent drop-shadow-md border-[#2C1557] col-span-3 flex flex-col gap-y-10 justify-between"><a href="https://www.fiverr.com/yujii_" target='_blank'>
                        <div className="flex flex-col gap-y-3.5">
                        <p className="font-bold text-xl text-white">
                            title
                        </p>
                        <p className="font-base text-white text-sm mb-4">
                            desc
                        </p>
                        </div>
                        <div className="flex flex-col"><img src="/images/user3.png" alt="Sarah Brown" className="h-10 w-10"/>
                        <p className="pt-2 text-sm font-semibold text-white">Name</p>
                        <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-slate-100/70">Client - </p>
                            
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            </div>
                        </div>
                        </div></a>
                    </div>
                    <div
                        className="border p-7 rounded-xl bg-transparent drop-shadow-md border-[#2C1557] col-span-2 flex flex-col gap-y-10 justify-between"><a href="https://www.fiverr.com/yujii_" target='_blank'>
                        <div className="flex flex-col gap-y-3.5">
                        <p className="font-bold text-xl text-white">
                            title
                        </p>
                        <p className="font-base text-white text-sm mb-4">
                            Levin did a fantastic job! I'm such a noob, and my bot is AMAZING! He was so patient with me and took the time to test the bot with me to make sure it was perfectly what I needed. I'm so HAPPY!! Yes it's a lot of caps, and they really are well deserved! Thank you SO MUCH for your patience and for going above and beyond, it really exceeded my expectations.
                        </p>
                        </div>
                        <div className="flex flex-col"><img src="/images/user4.png" alt="James White" className="h-10 w-10"/>
                        <p className="pt-2 text-sm font-semibold text-white">peixe7</p>
                        <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-slate-100/70">Client - </p>
                            
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5 5 2 7-6-4-6 4 2-7-5-5h7z"/>
                            </svg>
                            </div>
                        </div>
                        </div></a>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
  }
  