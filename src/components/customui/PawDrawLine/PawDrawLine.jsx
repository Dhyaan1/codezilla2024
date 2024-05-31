import "./PawDrawLine.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import lion from "../../../assets/lion-slid.png";
import cheetah from "../../../assets/cheetah-slid.png";
import wolf from "../../../assets/wolf-slid.png";
import horse from "../../../assets/horse-slid.png";
import dog from "../../../assets/dog-slid.png";
import cat from "../../../assets/cat-slid.png";
import cow from "../../../assets/cow-slid.png";
import pig from "../../../assets/pig-slid.png";
import goat from "../../../assets/goat-slid.png";
import chicken from "../../../assets/chicken-slid.png";

export default function PawDrawLine() {
  const [value, setValue] = useState(0);
  const refs = Array.from({ length: 10 }, () => useRef());
  const lineRef = useRef();
  const silcontainer = useRef();

  const animals = [
    lion,
    cheetah,
    wolf,
    horse,
    dog,
    cat,
    cow,
    pig,
    goat,
    chicken,
  ];

  console.log(value);

  useEffect(() => {
    const line = lineRef.current;
    if (line && silcontainer) {
      const silcontainerWidth =
        silcontainer.current.getBoundingClientRect().width;
      const newMargin = (value / 100) * silcontainerWidth;
      line.style.marginLeft = `${newMargin}px`;
    }

    const index = Math.floor(value / 10);
    if (refs.length > index && refs[index].current) {
      refs[index].current.firstChild.style.opacity = 1;
      refs[index].current.firstChild.style.transition = "0.5s";
      refs[index].current.firstChild.style.padding = "0";
    }
  }, [value, refs]);

  return (
    <motion.section
      className="componentSlider pl-20 pr-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p className="tracking-tighter text-5xl pb-8 text-center font-bold">
        Where do you draw the line?
      </p>
      <div className="silcontainer" ref={silcontainer}>
        <div className="lineToDraw" ref={lineRef}></div>{" "}
        {refs.map((ref, index) => (
          <div className="gridanimal" key={index} ref={ref}>
            <img src={animals[index]} alt={animals[index]} />
          </div>
        ))}
      </div>
      <div className="sliderMain"></div>
      <input
        className="slider mb-28"
        type="range"
        value={value}
        min="1"
        max="100"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={value === 100}
      />
    </motion.section>
  );
}
