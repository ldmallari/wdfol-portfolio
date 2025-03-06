import React from "react";
import '../assets/styles/project.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useParams } from "react-router-dom";
import projects from "../components/projects";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
    const { pId } = useParams();
    const project = projects.find((p) => p.pId == pId);
    
    if (!project){
        return <Notfound/>;
    }

  return (
    <>
    <Nav/>
    <div className="projMain pb-20">
      <div className="projContainer">
        <div className="projImage">
          <img src={project.image} alt="" />
        </div>

        <div className="projTxt-Btn">
          <div className="projCol1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h1>
            <p className="text-sm sm:text-base md:text-lg">{project.date}</p>
            <p className="text-sm sm:text-base md:text-lg">{project.shortdesc}</p>
            <div className="liveBtn">
              <a href={project.liveLink} target="_blank">Live Preview</a>
              <FontAwesomeIcon icon={faArrowRight} className="faArrowproj" />
            </div>
          </div>

          <div className="projCol2">
            <div>
              <p className="text-sm sm:text-base md:text-lg">Date</p>
              <p className="text-sm sm:text-base md:text-lg">{project.date}</p>
            </div>
            <div>
              <p className="text-sm sm:text-base md:text-lg">Category</p>
              <p className="text-sm sm:text-base md:text-lg">{project.category}</p>
            </div>
          </div>
        </div>

        <div className="projAlbum">
          <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
            <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
              {project.images.filter(img => img).map((img, index) => (
                <SwiperSlide key={index}>
                  <PhotoView src={img}>
                  <img src={img} alt="" className="w-full max-h-[200px] object-cover"/>
                  </PhotoView>
                </SwiperSlide>
              ))}
            </Swiper>
          </PhotoProvider>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Project Description</h2>
          <p className="text-sm sm:text-base md:text-lg">{project.description}</p>
        </div>
      </div>
    </div>

    </>
  );
};

export default Projects;