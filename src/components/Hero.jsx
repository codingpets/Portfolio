import React from "react";
import myPic from "../assets/myPic.png";

function Hero() {
  return (
    <div className="flex h-[90dvh]  w-dvw flex-col-reverse  md:flex-row ">
      <div className=" flex h-1/2 w-full items-center justify-center sm:h-full sm:w-3/4 ">
        <div className=" flex  w-3/4 flex-col justify-center ">
          <h1 className="pb-4 text-5xl font-medium lg:text-7xl">
            {" "}
            Hi, I'm coding<span className=" text-emerald-600">Pets</span>
          </h1>
          <h2 className=" mb:text-2xl mb-5 text-xl ">
            And I'm a{" "}
            <span className="  font-medium text-emerald-600">
              Frontend Developer
            </span>
          </h2>
          <p className=" mb-6">
            I’m a passionate Front-end developer who specializes on ReactJS and
            Tailwind CSS. I am confident that I have the skills and knowledge
            needed to be one of your employees. Give me an inch and I’ll take it
            to mile!
          </p>
          <div>
            <button className=" mr-4 rounded border-2 border-solid border-emerald-600 bg-emerald-600 px-8 py-2 font-medium text-emerald-50 hover:bg-emerald-500 hover:text-white">
              Hire Me
            </button>
            <button className=" rounded border-2 border-solid border-emerald-600 px-4 py-2 text-emerald-600 hover:border-emerald-500 hover:text-emerald-500">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className=" flex h-1/2 w-full items-center justify-center sm:h-full sm:w-1/2">
        <div className=" flex h-[80%] w-[40%] justify-center overflow-hidden rounded-full sm:w-[90%]">
          <img src={myPic} alt="myPic" className="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
