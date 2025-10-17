import React from "react";
import {FaPlus, FaTrash, FaCheck} from 'react-icons/fa';
import LogoCSMRezeArc from "../assets/LogoCSMRezeArc.png";

export default function Todo() {
  return (
    <div className="bg-black/60 text-white place-self-center w-11/12 max-w-md flex flex-col p-3 md:p-7 rounded-xl backdrop-blur-sm border border-black/20 shadow-lg shadow-gray">
      <div className="bg-gradient-to-r from-red-700/80 to-zinc-900/80 p-4 rounded-xl backdrop-blur-lg mb-6">
        <h1 className="font-saira-condensed text-3xl font-bold">Todo List V3</h1>
      </div>
    </div>
  )
}