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
    <div className="projMain">
      <div className="projContainer">
        <div className="projImage">
          <img src={project.image} alt=""/>
        </div>

        <div className="projTxt-Btn">
          <div className="projCol1">
              <h1>{project.title}</h1>
              <p>{project.date}</p>
              <p>{project.shortdesc}</p>
              <div className="liveBtn">
                <a href={project.liveLink} target="_blank">Live Preview</a><FontAwesomeIcon icon={faArrowRight} className="faArrowproj"/>
              </div>
          </div>

          <div className="projCol2">
            <div>
              <p>Client</p>
              <p>{project.category}</p>
            </div>
            <div>
              <p>Client</p>
              <p>{project.category}</p>
            </div>
          </div>
        </div>

        <div className="projAlbum">
          <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
          <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper">
            {project.images.filter(img => img)
            .map((img, index) => (
            <SwiperSlide>
              <PhotoView src={img}>
              <img key={index} src={img} />
              </PhotoView>
              </SwiperSlide>))}
          </Swiper>
          </PhotoProvider>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-bold">Project Description</h2>
          <p className="text-lg">{project.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;