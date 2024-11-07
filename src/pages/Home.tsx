import { useState } from "react";
import pix from "../assets/creatopy img1.webp";
import { CiGlobe } from "react-icons/ci";
import pix1 from "../assets/bitdefender.jpg";
import pix2 from "../assets/british council.jpg";
import pix3 from "../assets/eaten.jpg";
import pix4 from "../assets/hertz.png";
import pix5 from "../assets/zeizz.jpg";

const Home = () => {
  const picture = [
    {
      id: 1,
      img: <img src={pix1} alt="" />,
    },
    {
      id: 2,
      img: <img src={pix2} alt="" />,
    },
    {
      id: 3,
      img: <img src={pix3} alt="" />,
    },
    {
      id: 4,
      img: <img src={pix4} alt="" />,
    },
    {
      id: 5,
      img: <img src={pix5} alt="" />,
    },
  ];
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full h-[90vh]  flex items-center justify-center mb-10">
          <div className="w-[88%] h-[90%]  mt-10 flex gap-20">
            <div className="w-[38%] h-[90%] ">
              <p className="text-blue-900 font-semibold mt-20">
                HOME / AI AD GENERATOR
              </p>
              <h1 className="font-bold text-[30px] mb-1">
                AI advertisement generator
              </h1>
              <p className="text-[15px] mb-7">
                Enhance brand awareness and boost conversions with AI-generated
                ads. Create and scale designs in a user-friendly AI ad generator
                that can maximize your creative output and positively impact
                campaign performance.
              </p>
              <button className="w-[140px] h-[45px] bg-[#005ce5] text-white rounded-md">
                Design your ad
              </button>
            </div>
            <div className="w-[55%] h-full  bg-slate-100">
              <img src={pix} alt="img" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="w-full h-[70vh] bg-[#04413c] flex justify-center mb-5">
          <div className="w-[75%] h-[75%] ">
            <h1 className="mt-5 text-[30px] font-bold text-white text-center">
              AI powered design for every campaign
            </h1>
            <p className="text-[15px] text-center text-white mb-10">
              Transform complex design challenges into stunning visuals in
              seconds. Our user-friendly tool uses AI to create endless designs
              based on your campaign brief.
            </p>
            <div className="w-[65%] bg-white rounded-2xl  h-[20%] ml-40 flex gap-5 items-center">
              <input
                className="pl-2 w-[320px]  h-[40px] ml-2"
                placeholder="Add your website URL"
              />
              <button className="w-[140px] h-[40px] bg-[#005ce5] text-white rounded-md text-[15px]">
                ✨Generate Ads
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[40vh] bg-slate-200 flex justify-center">
          <div className="w-[80%] h-[70%] bg-slate-500">
            <h1 className="text-center">
              Businesses all over the world trust Creatopy
            </h1>
            <div className="w-full h-[70%] flex justify-center items-center gap-7 bg-gray-50">
              {picture.map((el) => (
                <div className="w-[100px] h-[100px] rounded-md">{el.img}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
