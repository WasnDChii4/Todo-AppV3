import React from "react";
import Todo from "./components/Todo";
import LogoCSMRezeArc from "./assets/LogoCSMRezeArc.png";

export default function App() {
  return (
    <div className="hero min-h-screen relative" style={{backgroundImage: "url(https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/09/chainsaw-man.jpg?w=1600&h=1600&fit=crop)", backgroundSize: "cover", backgroundPosition: "center",}}>
      {/* Overlay Blur */}
      <div className="hero-overlay backdrop-blur-md absolute inset-0"></div>
      {/* Logo di depan background */}
      <img src={LogoCSMRezeArc} alt="Logo CSM Reze Arc" className="z-10"/>
      <div className="hero-content text-neutral-content text-center relative z-10">
        <Todo />
      </div>
    </div>
  );
}
