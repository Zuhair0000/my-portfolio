import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 12;

export default function TextParallaxContent({
  image,
  subheading,
  heading,
  children,
}) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div>
        <div className="relative h-[100vh] flex flex-col justify-center items-center">
          <StickyImage media={image} />
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>
        {children}
      </div>
    </div>
  );
}

const OverlayCopy = ({ heading, subheading }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-4xl md:mb-4 md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text">
        {heading}
      </p>
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
    </motion.div>
  );
};

const StickyImage = ({ media }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const isVideo =
    typeof media === "string" &&
    (media.endsWith(".mp4") || media.endsWith(".webm"));
  return (
    <motion.div
      ref={targetRef}
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        width: "100%",
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      {isVideo ? (
        <video
          src={media}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${media})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      )}
      <motion.div
        style={{
          opacity,
        }}
        className="absolute inset-0 bg-neutral-950/60"
      />
    </motion.div>
  );
};
