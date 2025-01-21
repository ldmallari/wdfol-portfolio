import Nav from './Nav';
import Portfolio from './Portfolio';
import '../assets/styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <>
            <Nav/>
            <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]" id="heropage">
                <div className="container">
                <div className="-mx-4 flex">
                    <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                        <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-[#DDDDDD] sm:text-[42px] lg:text-[40px] xl:text-1xl">
                        I am Levin
                        </h1>
                        <h1 className='herohdr'>Full-Stack Web Developer</h1>
                        <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                        I break down complex user experience problems to create integrity focussed solutions that connect billions of people
                        </p>
                        <ul id="hero-btns" className="flex flex-wrap items-center">
                        <li>
                            <a
                            href="/#"
                            id="about-btn" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-normal text-white hover:bg-blue-dark lg:px-7"
                            >
                            About me
                            </a>
                        </li>
                        <li>
                            <a
                            href="../src/assets/files/resume.txt"
                            id="dl-resume" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-normal text-[#464646] hover:text-primary dark:text-white"
                            download>
                            Download Resume
                            </a>
                        </li>
                        <div className="flex items-center space-x-4" id='social-i'>
                            <a href="https://www.facebook.com/levin.mallari" target='_blank'><FontAwesomeIcon icon={faFacebookF} className="facebook"/></a>
                            <a href="https://github.com/ldmallari" target='_blank'><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            <a href="www.linkedin.com/in/levin-mallari" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className="linkedin"/></a>
                        </div>
                        </ul>
                        <div className="clients pt-10"/>
                        <div className='hero-texts'>
                            <div className='head-par'>
                            <h1>4</h1>
                            <p>Years of Experience</p>
                            </div>
                            <div className='head-par'>
                            <h1>20+</h1>
                            <p>Project Completed</p>
                            </div>
                            <div className='head-par'>
                            <h1>50+</h1>
                            <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                        <div id="hero-img" className="relative z-10 inline-block pt-11 lg:pt-0">
                        <img
                            src="../src/assets/images/hero.jpg"
                            alt="hero"
                            className="max-w-auto lg:ml-auto"
                        />
                        <span className="absolute -top-25 -left-8 z-[-1]" id='test-anim'>
                            <svg
                            width="93"
                            height="93"
                            viewBox="0 0 93 93"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                            </svg>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Portfolio/>
        </>
    )
  }
  