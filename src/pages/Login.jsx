import React from "react";
import loginImg from "../assets/images/loginImg.png";
import google from "../assets/icons/google.svg";
import linkedin from "../assets/icons/linkedin.svg";
import fb from "../assets/icons/fb.svg";
import apple from "../assets/icons/apple.svg";

export default function Login() {
  return (
    <div className="p-10 w-full px-[40px] flex justify-center">
      <div className="flex rounded-3xl bg-white">
        <div>
          <img src={loginImg} className="h-[550px]" alt="" />
        </div>
        <div className=" text-black p-16">
          <h1>
            <span className="font-bold">Login </span>to Your Account here !!
          </h1>
          <div className="my-10 flex flex-col gap-5 text-white">
            <button className="bg-[#2D2D2D] lightShadow flex items-center gap-10 px-10 py-2 rounded-lg">
              <img src={google} alt="" className="h-5" />
              Continue with Google
            </button>
            <button className="bg-[#2D2D2D] lightShadow rounded-lg flex items-center gap-10 px-10 py-2">
              <img src={linkedin} alt="" className="h-5" />
              Continue with LinkedIn
            </button>
          </div>
          <p className="text-center">or</p>
          <div className="flex gap-10 w-full justify-center my-5">
            <button className="flex items-center gap-2 w-36 h-12 justify-center rounded-xl bg-[#E7E7E7] lightShadow">
              {" "}
              <img className="h-6" src={apple} alt="" /> Apple
            </button>
            <button className="flex lightShadow items-center gap-2 bg-[#E7E7E7] w-36 justify-center rounded-xl h-12 ">
              {" "}
              <img src={fb} className="h-6" alt="" /> Facebook
            </button>
          </div>
          <div className="mt-16 text-center flex justify-center items-center gap-3">
            <p>Are you new here??</p>
            <div className="bg-gradient-to-r p-[2px] rounded-md from-yellow-300 to-black">
              <a href="#" className="bg-white px-3 py-[1px] rounded-[4px]">
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
