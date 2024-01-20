"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
const Hero = () => {
  return (
    <section className="w-full h-screen px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">Happy Birthday</h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Wishing you a day filled with joy, laughter, and all the wonderful
          things life has to offer. May this year bring you love, success, and
          unforgettable moments
        </p>
        <button className=" text-indigo-500 flex items-center">
          <FaBirthdayCake size={80} />
          <LuPartyPopper size={80} />
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "pic1.jpg",
  },
  {
    id: 2,
    src: "pic2.jpg",
  },
  {
    id: 3,
    src: "pic3.jpg",
  },
  {
    id: 4,
    src: "pic4.jpg",
  },
  {
    id: 5,
    src: "pic5.jpg",
  },
  {
    id: 6,
    src: "pic11.jpg",
  },
  {
    id: 7,
    src: "pic7.jpg",
  },
  {
    id: 8,
    src: "pic8.jpg",
  },
  {
    id: 9,
    src: "pic9.jpg",
  },
  {
    id: 10,
    src: "pic10.jpg",
  },
  {
    id: 11,
    src: "pic11.jpg",
  },
  {
    id: 12,
    src: "pic12.jpg",
  },
  {
    id: 13,
    src: "pic13.jpg",
  },
  {
    id: 14,
    src: "pic14.jpg",
  },
  {
    id: 15,
    src: "pic15.jpg",
  },
  {
    id: 16,
    src: "pic1.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
