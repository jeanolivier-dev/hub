"use client";

import React from "react";
import "./Products.css";
import { hitFeatures } from "@/utils/content";
import Image from "next/image";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/utils/animation";

export default function Products() {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Products
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Improve the stability of your application
            </motion.span>
          </div>

          <div className="hiw-features">
            {hitFeatures.map((features, i) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVariants}
                className="hiw-feature"
                key={i}
              >
                {/* Sentence Section */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{features.title}</span>
                  <span className="text">{features.desc}</span>
                </motion.div>

                {/* Icon */}
                <div className="icon">
                  <Image
                    src={features.icon}
                    alt=""
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
