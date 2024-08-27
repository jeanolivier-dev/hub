"use client";

import React from "react";
import "./Finances.css";
import { finances } from "@/utils/content";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/utils/animation";

export default function Finances() {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          {/* Left Section */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                Finances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                Your finances <br /> on autopilot
              </motion.span>
            </div>

            <div className="wwi-features">
              {finances.map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(i * 0.05 + 1)}
                  key={i}
                  className="wwi-feature"
                >
                  <span className="desc">{feature.title}</span>
                  <span className="text">{feature.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="wwi-right">
            <motion.img
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants(0.5)}
              src="persons.png"
              alt="persons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
