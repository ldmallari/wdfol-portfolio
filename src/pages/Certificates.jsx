import React from "react";
import '../assets/styles/cert.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faLink } from '@fortawesome/free-solid-svg-icons';

const Certificates = () => {

  return (
    <>
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-[#0F0715]">
        <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#DDDDDD] mb-2 block text-lg font-semibold">
                  My Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]" id="p-h2">
                  My Certificates
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
        </div>
        <div className="certAll">
            <div className="certContainer">
                <div className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src="../src/assets/images/certs/hubspot.png" alt="" />
                        </div>
                        <p>Google Analytics Certification</p>
                        <div className="certBtns">
                            <a href=""><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            <a href="../src/assets/images/certs/hubspot.png" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
                <div className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src="../src/assets/images/certs/hubspot.png" alt="" />
                        </div>
                        <p>Google Analytics Certification</p>
                        <div className="certBtns">
                            <a href=""><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            <a href="../src/assets/images/certs/hubspot.png" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
                <div className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src="../src/assets/images/certs/hubspot.png" alt="" />
                        </div>
                        <p>Google Analytics Certification</p>
                        <div className="certBtns">
                            <a href=""><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            <a href="../src/assets/images/certs/hubspot.png" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
                <div className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src="../src/assets/images/certs/hubspot.png" alt="" />
                        </div>
                        <p>Google Analytics Certification</p>
                        <div className="certBtns">
                            <a href=""><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            <a href="../src/assets/images/certs/hubspot.png" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
                <div className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src="../src/assets/images/certs/hubspot.png" alt="" />
                        </div>
                        <p>Google Analytics Certification</p>
                        <div className="certBtns">
                            <a href=""><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            <a href="../src/assets/images/certs/hubspot.png" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
                <div className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src="../src/assets/images/certs/hubspot.png" alt="" />
                        </div>
                        <p>Google Analytics Certification</p>
                        <div className="certBtns">
                            <a href=""><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            <a href="../src/assets/images/certs/hubspot.png" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Certificates;