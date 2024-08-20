"use client";

import React from "react";
import "./Customers.css";
import { features } from "@/utils/content";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  descVariants,
  tagVariants,
  titleVariants,
} from "@/utils/animation";

export default function Customers() {
  return (
    <div className="c-wrapper">
      <div className="container">
        <div className="c-container">
          <div className="c-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              Customers
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="title"
            >
              {""}
              Proof makes increasing conversion simple
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={descVariants}
              className="desc"
            >
              Immediate and 100% Guranteed
            </motion.span>
          </div>

          <div className="c-blocks">
            <div className="c-block">
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="sec-title"
              >
                Conversion Boost
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={descVariants}
                className="text"
              >
                Web & Digital marketing
              </motion.span>
              <div className="block-features">
                {features.slice(0, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((i + 1) * 0.1)}
                    key={i}
                    className="block-feature"
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={80}
                      height={80}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
