import Nav from './Nav';
import Portfolio from './Portfolio';
import '../assets/styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {faDownload } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

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
                        src="../src/assets/images/hero.jpg"
                        alt="hero"
                        className="max-w-auto lg:ml-auto"
                    />
                    </div>
                </div>
            </div>
            <div className="relative bg-white pb-[90px] pt-[120px] dark:bg-dark lg:pt-[150px]" id="heropage">
                
                <div className="container">
                <div className="-mx-4 flex" id='hero-sect'>
                    <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                        <h1 id='herosp' className="mb-2 text-4xl font-bold !leading-[1.208] text-dark dark:text-[#DDDDDD] sm:text-[42px] lg:text-[40px] xl:text-1xl">
                        I am Levin
                        </h1>
                        <h1 className='herohdr'>Full-Stack Web Developer</h1>
                        <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                        I break down complex user experience problems to create integrity focussed solutions that connect billions of people
                        </p>
                        <div className='btn-socials'>
                        <ul id="hero-btns" className="flex flex-wrap items-center">
                        <li>
                            <a
                            href="/#"
                            id="about-btn" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-normal text-white hover:bg-blue-dark lg:px-7"
                            >
                            About me
                            </a>
                        </li>
                        <li className='dl-resume'>
                            <a
                            href="../src/assets/files/resume.txt"
                            id="dl-resume" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-normal text-[#464646] hover:text-primary dark:text-white"
                            download>
                            <FontAwesomeIcon icon={faDownload} className='faDownload'/>Download Resume
                            </a>
                        </li>
                        <li className='faDownload'>
                            <a
                            href="../src/assets/files/resume.txt"
                            id="dl-resume" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-normal text-[#464646] hover:text-primary dark:text-white"
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
                                src="../src/assets/images/hero.jpg"
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
            <Portfolio/>
        </>
    )
  }
  