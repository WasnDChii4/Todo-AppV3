import React from "react";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="hero min-h-screen" style={{
        backgroundImage:
          "url(https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/09/chainsaw-man.jpg?w=1600&h=1600&fit=crop)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <Todo />
      </div>
    </div>
  )
}