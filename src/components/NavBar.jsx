import React, { useEffect, useState } from "react";
import dropdown from "../assets/icons/dropdown.svg";

export default function NavBar() {
  const [scrollPos, setScrollPos] = useState();
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPos(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex z-20 px-[40px] ${
        scrollPos > 740 && scrollPos < 3950 ? "text-black" : "text-white"
      } backdrop-blur-lg sticky top-0 pt-3 justify-between items-center`}
    >
      <div>
        <h1 className="font-k2d font-bold text-3xl">
          Qurios<span className="text-yellow-300">Me</span>.
        </h1>
      </div>
      <div className="flex justify-between gap-14 items-center text-[20px]">
        <div className="flex items-center gap-2">
          <p>Explore</p>
          <img
            src={dropdown}
            alt=""
            className={`h-2 ${
              scrollPos > 740 && scrollPos < 3950 ? "filter invert" : ""
            }`}
          />
        </div>
        <p>Become a Seller</p>
        <div className="bg-gradient-to-r p-[3px] rounded-md from-yellow-300 to-white">
          <button className="px-3 py-1 text-white bg-[#0D1717] rounded-md">
            Sign in
          </button>
        </div>

        <div>
          <img
            src="https://t3.ftcdn.net/jpg/06/50/24/56/360_F_650245616_WUPkDzObkPLVyegasDCeNhQXvFVVJoKn.jpg"
            alt=""
            className="h-16 rounded-full w-16 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
