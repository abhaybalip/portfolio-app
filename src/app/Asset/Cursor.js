
import React, { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.21)",
        border: "1px solid white",
        pointerEvents: "none",
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
        transition: "transform 0.05s linear",
        zIndex: 1000,
        mixBlendMode: "difference", // optional cool effect
      }}
    />
  );
};

export default MouseFollower;
