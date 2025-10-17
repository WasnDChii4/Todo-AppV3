import React from "react";
import Todo from "./components/Todo";
import BackgroundCSM from './assets/BackgroundCSM.jpg'
import LogoCSMRezeArc from "./assets/LogoCSMRezeArc.png";

export default function App() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${BackgroundCSM})`}}>
      <div className="hero-overlay backdrop-blur-sm" />
      <img src={LogoCSMRezeArc} alt="Logo CSM Reze Arc" className="z-10" />
      <div className="w-11/12 z-10">
        <Todo />
      </div>
    </div>
  );
}
