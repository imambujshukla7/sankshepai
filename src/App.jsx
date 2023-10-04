import React from "react";
import Hero from "./component/Hero";
import Demo from "./component/Demo";
import "./App.css";

export default function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
      <div className="w-full py-5 mx-auto max-md:text-sm max-w-fit">
        {/* © 2023 HacktivSpace Community. */}
      </div>
      <a
        href="https://linktr.ee/hacktivspacecommunity"
        className="fixed bottom-4 right-4 md:bottom-[10px] md:right-[10px] z-50  border border-violet-500 p-[10px]  text-violet-500 rounded-full hover:scale-110 transition-all duration-300 astro-WNSQ5JNR"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
            <path
              fill="currentColor"
              d="M19 3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.333L4 21.5c-.824.618-2 .03-2-1V6a3 3 0 0 1 3-3h14Zm-8 9H8a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Zm5-4H8a1 1 0 0 0-.117 1.993L8 10h8a1 1 0 0 0 .117-1.993L16 8Z"
            ></path>
          </g>
        </svg>
      </a>
    </main>
  );
}
