import React from "react";
import {FaPlus, FaTrash, FaCheck} from 'react-icons/fa';

export default function Todo() {
  return (
    <div className="hero min-h-screen" style={{
        backgroundImage:
          "url(https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/09/chainsaw-man.jpg?w=1600&h=1600&fit=crop)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}