import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Tile = () => {
  const [color, setColor] = useState("#000"); // Initial color
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#33FFFF", "#FFFF33"]; // Array of colors

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 1000); // Change color every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [colors]);
  return (
    <motion.div
      whileHover={{
        zIndex: 2,
        backgroundColor: color,
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
      className="aspect-square bg-neutral-950 border-neutral-900 rounded-full"
    ></motion.div>
  );
};
export default Tile;
