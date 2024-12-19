import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            id="projects"
            className="AboutBody grid grid-cols-2 gap-8 py-12 px-20 h-screen w-full relative bg-cover bg-no-repeat bg-fixed text-black"
        >
            {/* 1-chi loyiha */}
            <div
                className="relative bg-black/50 rounded text-xl text-white cursor-pointer"
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className="card-image absolute top-0 left-0 w-full h-full" />
                {hoveredIndex === 0 && (
                    <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5">
                        <div className="font-bold">Products Online Shop</div>
                        <div className="links flex items-center justify-center gap-5">
                            <a
                                className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                                href="https://16-dars-xi.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Live Demo
                            </a>
                            <a
                                className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                                href="https://github.com/whyshoxrux/16-dars"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faCode} />
                                View Source
                            </a>
                        </div>
                        <div className="text-xs flex flex-col gap-1 items-center">
                            <span>Written in: JavaScript XML, Vanilla CSS</span>
                            <span>Tools: ReactJs, TailWindCSS</span>
                        </div>
                    </div>
                )}
            </div>

            {/* 2-chi loyiha */}
            <div
                className="relative bg-black/50 rounded text-xl text-white cursor-pointer"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className="card-image flags absolute top-0 left-0 w-full h-full" />
                {hoveredIndex === 1 && (
                    <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5">
                        <div className="font-bold">
                            Flags with Full Responsive
                        </div>
                        <div className="links flex items-center justify-center gap-5">
                            <a
                                className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                                href="https://17-dars-omega.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Live Demo
                            </a>
                            <a
                                className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-amber-400 hover:text-black"
                                href="https://github.com/whyshoxrux/17-dars"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faCode} />
                                View Source
                            </a>
                        </div>
                        <div className="text-xs flex flex-col gap-1 items-center">
                            <span>Written in: JavaScript XML, Vanilla CSS</span>
                            <span>Tools: ReactJs, TailWindCSS</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Coming Soon */}
            <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
                Coming Soon
            </div>
            <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
                Coming Soon
            </div>
        </div>
    );
};

export default Projects;
