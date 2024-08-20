"use client";

import React, { useRef } from "react";
import "./ClientVideo.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ClientVideo() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          style={{ scale }}
          ref={ref}
          src="/video.mp4"
          className="bv-video"
          loop
          muted
          autoPlay
        />
      </div>
    </div>
  );
}
