import { useState } from "react";
import pix from "../assets/craetopy logo.png";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState([
    { id: 1, title: "products", url: "/product", state: false },
    { id: 2, title: "solutions", url: "/solution", state: false },
    { id: 3, title: "Resources", url: "/resource", state: false },
    { id: 4, title: "company", url: "/company", state: false },
    { id: 5, title: "pricing", url: "/price", state: false },
  ]);

  return (
    <div>
      <div className="w-full h-[100px]   border">
        <div className="w-full h-[40px] bg-[#003e39]">
          <div className="flex justify-between w-[80%]  h-[40px] ml-40">
            ` `
            <div className="w-[80%] h-full  flex gap-2 items-center">
              <div className="text-white text-[10px]">
                🚀 Get ready for 'Brand-Centric AI: Generating Winning Ads' on
                Oct 17, 1 PM EDT. Your next way of using Creatopy awaits. ✨
              </div>
              <div>
                <p className="text-[#b5c369] underline cursor-pointer text-[12px] font-semibold">
                  save your spot
                </p>
              </div>
            </div>
            <div className=" w-[10%] h-full flex items-center justify-center">
              <MdClose className="text-slate-50 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full h-[60px] flex items-center justify-center">
          <div className="w-[85%] h-full  flex justify-between">
            <div className="w-[10%] h-full border-r flex items-center">
              <img src={pix} alt="img" className="w-full h-[80%]" />
            </div>
            <div className="w-[73%0] h-full bg-transparent flex gap-2">
              <div className="w-[802  %] h-full border-r flex gap-7 items-center text-[12px]">
                {header.map((el) => (
                  <div
                    onMouseEnter={() => {
                      el.state = true;
                      setHeader([...header]);
                    }}
                    onMouseLeave={() => {
                      el.state = false;
                      setHeader([...header]);
                    }}
                  >
                    <Link to={el.url}>{el.title}</Link>
                  </div>
                ))}
              </div>
              <div className="w-[40%] flex gap-3 items-center ">
                <button className="w-[30%] h-[40px]  rounded-md text-[12px]">
                  sign in
                </button>
                <button className="w-[30%] h-[40px] border rounded-md text-[12px]">
                  Book a demo
                </button>
                <button className="bg-[#b4ed08] w-[30%] h-[40px] rounded-md text-[12px]">
                  Start free trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
