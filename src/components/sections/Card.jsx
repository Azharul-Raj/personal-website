import React from "react";
import { Link } from "react-router-dom";

const Card = ({ details }) => {
  const { title, image, desc, url } = details;
  return (
    <div>
      <div className="overflow-hidden aspect-video bg-gradient-to-br from-green-400 to-blue-600 cursor-pointer rounded-xl relative group">
        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold">{title}</div>

              {/* <div className="opacity-100 text-sm ">{desc}</div> */}
              <div className="opacity-100">
                <a
                  href={`${url}`}
                  target="_blank"
                  className="btn btn-sm bg-cyan-600 text-white"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-cover w-full aspect-square group-hover:scale-110 hover:opacity-25 transition duration-300 ease-in-out"
          src={`${image}`}
        />
      </div>
    </div>
  );
};

export default Card;
