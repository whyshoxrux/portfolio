import React, { useState } from "react";

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
      <div
          id="education"
          className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
      >
          <div className="education-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
              ..// academic history
          </div>
          <div className="flex w-9/12">
              {/* Sidebar */}
              <div className="w-1/7">
                  <ul className="p-4">
                      <li
                          className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                              selectedOption === 1 ? "text-amber-300" : ""
                          }`}
                          onClick={() => handleOptionClick(1)}
                      >
                          Najot ta'lim
                      </li>
                      <li
                          className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80  ${
                              selectedOption === 2 ? "text-amber-300 " : ""
                          }`}
                          onClick={() => handleOptionClick(2)}
                      >
                          ISFT
                      </li>
                  </ul>
              </div>
              {/* Content Box */}
              <div className="flex-1 p-4 w-auto">
                  {selectedOption === 1 && (
                      <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
                          <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                              <div className="d-title text-3xl font-semibold  text-amber-300">
                                  Najot ta'lim
                              </div>
                              <div className="d-address text-lg">
                                  Najot ta'lim markazi,
                                  <br /> Farg'ona, O'zbekiston
                              </div>
                          </div>
                          <div className="degree-extra flex justify-between">
                              <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                                      Yo'nalish:
                                  </div>
                                  <div className="d-major-text text-lg">
                                      Fulltack (NodeJs, NestJs, ReactJs)
                                  </div>
                                  <div className="d-major-link text-blue-400">
                                      <a
                                          href="https://najottalim.uz/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          title="section under development"
                                      >
                                          Learn more
                                      </a>
                                  </div>
                              </div>
                              <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                                  <div className="text-3xl font-medium  text-amber-300">
                                      Qancha vaqt:
                                  </div>
                                  <div className="text-lg">1 yil</div>
                                  <div className="text-base">2023-2024</div>
                              </div>
                              <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                                  <div className="text-3xl font-medium  text-amber-300">
                                      Erishgan yutuqlar:
                                  </div>
                                  <div className="text-lg">
                                      Najot ta'lim sertifikati
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
                  {selectedOption === 2 && (
                      <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
                          <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                              <div className="d-title text-3xl font-semibold  text-amber-300">
                                  International school of finance technology and
                                  science
                              </div>
                              <div className="d-address text-lg">
                                  Toshkent shahar, Mirzo Ulug'bek tumani
                              </div>
                          </div>
                          <div className="degree-extra flex justify-between">
                              <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                                      Yo'nalish:
                                  </div>
                                  <div className="d-major-text text-lg">
                                      Axborot texnologiyalari va tizimlari
                                  </div>
                                  <div className="d-major-link text-blue-400">
                                      <a
                                          href="https://isft.uz/uz/applicants"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          title="section under development"
                                      >
                                          Learn more
                                      </a>
                                  </div>
                              </div>
                              <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                                  <div className="text-3xl font-medium  text-amber-300">
                                      O'qish muddati:
                                  </div>
                                  <div className="text-lg">5 yil</div>
                                  <div className="text-base">2023-2028</div>
                              </div>
                              <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                                  <div className="text-3xl font-medium  text-amber-300">
                                      Erishgan narsa:
                                  </div>
                                  <div className="text-lg">O'qimoqda</div>
                              </div>
                          </div>
                      </div>
                  )}
                 
              </div>
          </div>
      </div>
  );
};

export default Education;
