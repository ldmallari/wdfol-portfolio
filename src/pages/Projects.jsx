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
        <div>
            <h1></h1>
            <a href=""></a>
        </div>
    </div>
    </>
  );
};

export default Projects;