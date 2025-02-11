import React from "react";
import '../assets/styles/project.css'
import { useParams } from "react-router-dom";
import projects from "../components/projects";

const Projects = () => {
    const { pId } = useParams();
    const project = projects.find((p) => p.pId == pId);
    
    if (!project){
        return <Notfound/>;
    }

  return (
    <>
    <div>
      <div className="projContainer">
        <div className="projImage">
          <img src={project.image} alt="" />
        </div>

        <div>
          <div>
              <h1>{project.title}</h1>
              <p>{project.shortdesc}</p>
          </div>
          <a href={project.liveLink} target="_blank">Live Preview</a>
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