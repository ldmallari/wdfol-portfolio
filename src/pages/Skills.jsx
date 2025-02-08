import React from "react";
import '../assets/styles/skills.css'

const Skills = () => {

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
                  My Skills
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="flex flex-wrap items-center justify-center" id="lbox-section">
                <div className="lbox-container">
                    <div className="l-boxes">
                        <div className="lbox-img">
                            <img src="../src/assets/images/php.png" alt=""/>
                        </div>
                        <div className="text-xl text-[#747779] group:hover:text-[#8750f7] font-extrabold">92%</div>
                    </div>
                    <p className="text-[#8750f7] text-center">PHP</p>
                </div>
                <div className="lbox-container">
                    <div className="l-boxes">
                        <div className="lbox-img">
                            <img src="../src/assets/images/react.png" alt=""/>
                        </div>
                        <div className="text-xl text-[#747779] group:hover:text-[#8750f7] font-extrabold">92%</div>
                    </div>
                    <p className="text-[#8750f7] text-center">React</p>
                </div>
                <div className="lbox-container">
                    <div className="l-boxes">
                        <div className="lbox-img">
                            <img src="../src/assets/images/python.png" alt=""/>
                        </div>
                        <div className="text-xl text-[#747779] group:hover:text-[#8750f7] font-extrabold">92%</div>
                    </div>
                    <p className="text-[#8750f7] text-center">Python</p>
                </div>
                <div className="lbox-container">
                    <div className="l-boxes">
                        <div className="lbox-img">
                            <img src="../src/assets/images/javascript.png" alt=""/>
                        </div>
                        <div className="text-xl text-[#747779] group:hover:text-[#8750f7] font-extrabold">92%</div>
                    </div>
                    <p className="text-[#8750f7] text-center">JavaScript</p>
                </div>
                <div className="lbox-container">
                    <div className="l-boxes">
                        <div className="lbox-img">
                            <img src="../src/assets/images/wordpress.png" alt=""/>
                        </div>
                        <div className="text-xl text-[#747779] group:hover:text-[#8750f7] font-extrabold">92%</div>
                    </div>
                    <p className="text-[#8750f7] text-center">WordPress</p>
                </div>
                <div className="lbox-container">
                    <div className="l-boxes">
                        <div className="lbox-img">
                            <img src="../src/assets/images/figma.png" alt=""/>
                        </div>
                        <div className="text-xl text-[#747779] group:hover:text-[#8750f7] font-extrabold">92%</div>
                    </div>
                    <p className="text-[#8750f7] text-center">Figma</p>
                </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Skills;