import React from "react";
import "../styles/services.css";
import wedding from "../images/wedding.jpg";
import wedding2 from "../images/wedding2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="border-0 border-black bg-gradient-to-bl xl:h-full flex items-center from-blue-100 to-red-100"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="h-full flex flex-col items-center w-[95%] mx-auto  border-0 border-black">
        <span className="my-3 font-bold text-4xl underline underline-offset-[4.5px] decoration-red-600">
          Services
        </span>
        <div className="w-full space-y-8 my-5 h-full">
          <span className="font-semibold text-3xl">Packages</span>
          <div
            className="flex flex-nowrap overflow-x-scroll overflow-y-hidden space-x-5 p-7"
            style={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Wedding
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <Link
                    to="packages/wedding"
                    className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold"
                  >
                    Check it now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Private Celebaration
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Corporate Event
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Social Gatherings
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Outdoor Events
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Themed Events
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Ceromonies
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Ceromonies
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-8 my-5 h-full">
          <span className="font-semibold text-3xl">Packages</span>
          <div
            className="flex flex-nowrap overflow-x-scroll overflow-y-hidden space-x-5 p-7"
            style={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Wedding
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <Link
                    to="packages/wedding"
                    className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold"
                  >
                    Check it now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Private Celebaration
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Corporate Event
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Social Gatherings
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Outdoor Events
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Themed Events
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Ceromonies
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Ceromonies
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-8 my-5 h-full">
          <span className="font-semibold text-3xl">Packages</span>
          <div
            className="flex flex-nowrap overflow-x-scroll overflow-y-hidden space-x-5 p-7"
            style={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Wedding
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <Link
                    to="packages/wedding"
                    className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold"
                  >
                    Check it now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Private Celebaration
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Corporate Event
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Social Gatherings
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Outdoor Events
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding2} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Themed Events
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Ceromonies
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="border-2 border-black rounded-lg flex items-center justify-center hover:scale-105 duration-300 h-fit shadow-lg shadow-black"
              style={{ flex: "0 0 auto" }}
            >
              <div className="cat-main h-fit relative ">
                <img className="h-[22rem] rounded-md" src={wedding} alt="" />
                <div className="cat-box space-y-1 flex flex-col justify-end pb-6 items-start px-2 absolute top-0 rounded-md bg-opacity-50 bg-slate-600 h-full w-full text-white">
                  <div className="font-bold text-xl underline underline-offset-2">
                    Ceromonies
                  </div>
                  <p>One of the best services and popular one among 30's</p>
                  <button className="border-2 border-black shadow shadow-slate-600 px-3 py-1 rounded-md bg-black text-semibold">
                    Check it now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
