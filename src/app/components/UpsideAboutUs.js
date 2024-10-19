"use client";
import React from "react";
import "@/app/styles/fonts.module.css";
const UpsideAboutUs = () => {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap bg-black w-full min-h-screen p-8 md:p-16 bg-cover bg-center mt-10"
      
    ><div className="flex-1 flex flex-col justify-center items-center text-center text-white p-8 md:p-12  transform transition-transform duration-300 hover:scale-105">
    <h4 className="text-yellow-400 text-5xl font-bold mb-4 drop-shadow-lg">
      COOKING WITH AI
    </h4>
    <h1 className="font-semibold text-3xl md:text-2xl text-white mb-6 font-delius">
      Join{" "}
      <span className="text-yellow-400 tracking-wider font-circuitboard text-3xl md:text-5xl"style={{ fontFamily: "circuitboard" }}>
        Homify
      </span>
      , where the art of cooking meets the ease of inspiration
    </h1>
    <hr className="w-1/4 mx-auto border-yellow-400 mb-6 border-2 rounded"style={{ border: "1px solid #eff7f6" }} />

    <h5 className="text-lg font-delius max-w-xl mx-auto mt-6 leading-relaxed" style={{ fontFamily: "delius" }}>
      Unlock flavors like never before! With AI-powered recipes and tailored video guides, transform ordinary ingredients into extraordinary dishes. Your culinary adventure starts here!
    </h5>
  </div>
      <div className="flex-1 flex justify-center items-center p-5">
        <img
          className="w-full h-auto md:w-90 md:h-96 object-cover shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg"
          src="/images/aboutUs/pic1.png"
          alt="Cooking Image"
        />
      </div>
    </div>
  );
};

export default UpsideAboutUs;
