import React from "react";
import { avtar } from "../utils/avtar";
import { Link } from "react-router-dom";
const AvatarSelect = () => {
  const searchParams = new URLSearchParams(document.location.search);
  console.log();
  return (
    <>
     <div className="mb-10">
     <h1 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black mt-4">
        Select Your Favourite Anime
      </h1>
      <h1 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black mt-4">
        For <span className="text-blue-600">{searchParams.get("name")}</span>{" "}
        Subject
      </h1>
      <div className="flex justify-center items-center w-full mb-5">
        <div className="flex flex-wrap w-1/2">
          {avtar.map((item, i) => (
            <a href="http://localhost:8080/" target="_blank">
              <img
                key={i}
                className="w-20 h-20 mt-3 p-1 mx-2 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={item}
                alt="Bordered avatar"
              />
            </a>
          ))}
        </div>
      </div>
     </div>
    </>
  );
};

export default AvatarSelect;
