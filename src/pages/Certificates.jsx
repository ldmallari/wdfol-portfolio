import React from "react";
import '../assets/styles/cert.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
import certificates from "../components/certificates";

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
        <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
        <div className="certAll">
            <div className="certContainer">
                {certificates.map((certs, id) =>
                <div key={id} className="certBoxes">
                    <div className="certItems">
                        <div className="certImg">
                            <img src={certs.image} alt="" />
                        </div>
                        <p>{certs.title}</p>
                        <div className="certBtns">
                            <PhotoView src={certs.image}>
                            <a className="previewBtn"><FontAwesomeIcon icon={faLink} className='faIcons'/>Preview</a>
                            </PhotoView>
                            <a href={certs.image} className="downBtn" download><FontAwesomeIcon icon={faDownload} className='faIcons'/>Download</a>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
        </PhotoProvider>
    </section>
    </>
  );
};

export default Certificates;