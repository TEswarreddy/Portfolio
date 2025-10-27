import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon ,tech}) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <h4 className="text-white text-[14px] font-bold text-center">
          {tech}
        </h4>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
      >
        I’m a passionate Computer Science student with skills in software development, machine learning, and deep learning. I have hands-on experience working with multiple programming languages including Java, Python, JavaScript, and C, and I build scalable web applications using modern technologies like React.js, Node.js, and the Spring Framework.
        <br></br>
        My technical interests span from full-stack web development to artificial intelligence. I enjoy solving data structure and algorithmic problems, developing intelligent machine learning models, and implementing deep learning architectures using TensorFlow and Keras.
        <br></br>
        I’m driven by curiosity and a desire to create impactful digital solutions — whether it’s crafting efficient backend systems, designing interactive UIs, or building AI-powered applications that make a difference.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} tech={service.tech} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
