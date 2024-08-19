"use client";

import React from "react";
import "./Hero.css";
import { HeroData } from "@/utils/content";
import { animate, delay, motion } from "framer-motion";
import { descVariants, titleVariants } from "@/utils/animation";

export default function Hero() {
  const variants = (delay) => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: { type: "spring", damping: 25, duration: 2.5, delay },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          <div className="h-right">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="h-title"
            >
              <span>Balance Agility</span>
              <span>with Stability</span>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descVariants}
              className="h-desc"
            >
              Hub monitor application stability, so you can make data-driven
              decision on whether you should be building new features, or fixing
              bugs.
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="m-get-started"
            >
              Get started
            </motion.div>
          </div>

          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div key={i} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div key={i} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt="#"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
