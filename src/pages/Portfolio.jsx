import React, { useState } from "react";
import '../assets/styles/portfolio.css'
import projects from "../components/projects";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark" id="works">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#DDDDDD] mb-2 block text-lg font-semibold">
                My Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]" id="p-h2">
                All My Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                Explore my complete collection of projects, highlighting my skills, creativity, and dedication to quality work.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition duration-500 ease-in-out md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-[#8750f7] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#8750f7] hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition duration-500 ease-in-out md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-[#8750f7] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#8750f7] hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition duration-500 ease-in-out md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-[#8750f7] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#8750f7] hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {projects.map((project) => (
            <PortfolioCard
              key={project.pId}
              ImageHref={project.image}
              category={project.category}
              title={project.title}
              button="View Details"
              buttonHref={`/projects/${project.pId}`}
              showCard={showCard}
            />))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div id="container-proj" className="relative z-10 mx-7 -mt-20 text-center">
            <span className="text-[#DDDDDD] mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition duration-500 ease-in-out hover:border-[#8750f7] hover:bg-[#8750f7] hover:text-white" id="detailBtn"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
