import React from "react";
import { logo } from "../assets";
import { sankshep_logo } from "../assets";
import { AiFillPlayCircle } from "react-icons/ai";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={sankshep_logo}
          alt="change it"
          className="w-40 object-contain"
        />

        <div className="px-2 flex justify-center items-center bg-indigo-600 rounded-full">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1Lfnp1GPViRxfuUCHkw593JN_KbMGPbQR?usp=sharing"
              )
            }
            className="black_btn_two"
          >
            <span>
              <AiFillPlayCircle />
            </span>
          </button>
          <button
            type="button"
            onClick={() =>
              window.open("https://linktr.ee/hacktivspacecommunity")
            }
            className="black_btn "
          >
            Hactivspace
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Insights at a Glance with <br className="max-md:hidden" />
        <span className="orange_gradient">Sankshep AI</span>
      </h1>
      <h2 className="desc">
        Extract key insights from lengthy articles and save time by quickly
        grasping the essence of any text without having to read through every
        word.
      </h2>
    </header>
  );
};

export default Hero;
