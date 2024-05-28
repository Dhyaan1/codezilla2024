import { useScroll, motion, useSpring, useTransform } from "framer-motion";

export default function PawProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["#111827", "#7EF29D", "#00f"]
  );
  return (
    <>
      <motion.div
        style={{
          //   scaleX: scrollYProgress,
          scaleX,
          zIndex: 11,
          transformOrigin: "left",
          //   background: "blue",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "15px",
        }}
      />
    </>
  );
}
