import React from "react";
import '../assets/styles/project.css'
import { useParams } from "react-router-dom";
import projects from "../components/projects";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
    const { pId } = useParams();
    const project = projects.find((p) => p.pId == pId);
    
    if (!project){
        return <Notfound/>;
    }

  return (
    <>
    <div className="projMain">
      <div className="projContainer">
        <div className="projImage">
          <img src={project.image} alt="" className="mainImg"/>
        </div>

        <div className="projTxt-Btn">
          <div>
              <h1>{project.title}</h1>
              <p>{project.shortdesc}</p>
          </div>
          <div className="liveBtn">
            <a href={project.liveLink} target="_blank">Live Preview</a><FontAwesomeIcon icon={faArrowRight} className="faArrowproj"/>
          </div>
        </div>

        <div className="projAlbum">
        </div>

        <div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;