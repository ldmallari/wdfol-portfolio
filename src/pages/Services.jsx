import React from "react";
import '../assets/styles/service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

  return (
    <>
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-[#050709]">
        <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#DDDDDD] mb-2 block text-lg font-semibold">
                  My Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]" id="p-h2">
                  My Quality Services
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                </p>
              </div>
            </div>
        </div>
        <div className="headContainer">
            <div className="headBox">
                <div className="headFlex">
                    <div className="serv-head">
                        <h2>01</h2>
                        <h1>Web Development</h1>
                    </div>
                    <div className="headP"><p>I create custom websites that fit your business needs, making sure they look great, work smoothly, and are easy to use on any device.</p>
                    <FontAwesomeIcon icon={faArrowRight} className="faArrow"/>
                    </div>
                </div>
                <div className="headFlex">
                    <div className="serv-head">
                        <h2>02</h2>
                        <h1>Automation & Scripting</h1>
                    </div>
                    <div className="headP"><p>I help set up and manage your game or web server, making sure it runs smoothly, stays secure, and performs at its best.</p>
                    <FontAwesomeIcon icon={faArrowRight} className="faArrow"/>
                    </div>
                </div>
                <div className="headFlex">
                    <div className="serv-head">
                        <h2>03</h2>
                        <h1>Discord Bot Development</h1>
                    </div>
                    <div className="headP"><p>I help set up and manage your game or web server, making sure it runs smoothly, stays secure, and performs at its best.</p>
                    <FontAwesomeIcon icon={faArrowRight} className="faArrow"/>
                    </div>
                </div>
                <div className="headFlex">
                    <div className="serv-head">
                        <h2>04</h2>
                        <h1>Server Setup & Management</h1>
                    </div>
                    <div className="headP"><p>I help set up and manage your game or web server, making sure it runs smoothly, stays secure, and performs at its best.</p>
                    <FontAwesomeIcon icon={faArrowRight} className="faArrow"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="circlePosition w-[300px] h-[300px] bg-[#8750f7] rounded-[100%] absolute z-[-1] top-[150%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div> */}
    </section>
    </>
  );
};

export default Services;