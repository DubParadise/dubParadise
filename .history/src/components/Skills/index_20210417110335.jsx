import "./style.css";
import Lottie from "react-lottie";
import animationData from "../../assets/animation.json";
import Html from "../../assets/html5.svg";
import Css from "../../assets/css3.svg";
import Js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import Next from "../../assets/next-dot-js.svg";
// import Git from "../../assets/git.svg";
import Github from "../../assets/github.svg";
import MaterialUi from "../../assets/material-ui.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import { motion } from "framer-motion";
const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <h1 className="title">Habilidades</h1>
      <section className="skills">
        <div>
          
        </div>
      </section>
    </>
  );
};

export default Skills;