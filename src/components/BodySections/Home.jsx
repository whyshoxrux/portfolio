import React from "react";

const Home = () => {
  return (
    <div
      className="HomeBody flex flex-col justify-start items-center gap-5 relative h-screen w-full text-white bg-black p-12 font-bold bg-cover bg-no-repeat"
      id="home"
    >
      <div className="body-image-container h-64 w-64 flex items-center justify-center">
        <div className="img-border h-full w-full flex items-center justify-center">
          <div className="avatar flex items-center justify-center h-44 w-44 opacity-100 z-444 overflow-hidden bg-cover bg-center rounded-full"></div>
        </div>
      </div>
      <>
        <span className="relative font-dancingScript text-2xl tracking-widest">
          Salom
        </span>
        <span className=" text-5xl font-extrabold relative font-dm-serifDisplay tracking-wider text-amber-400">
          Men Toxirov Shoxruxman
        </span>
      </>
      <span className=" text-2xl text-center relative font-genos">
        Optimal Backend hamda chiroyli Frontend birlashgan dasturchi, ya'ni FullStack dasturchisiman
      </span>
    </div>
  );
};

export default Home;
