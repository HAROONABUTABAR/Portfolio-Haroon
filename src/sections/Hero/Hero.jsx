import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/hero-img.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import Cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Haroon Abutabar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Haroon
          <br />
          Abutabar
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/haroon_abutabar" target="_blank">
            <img src={twitterIcon} alt="X icon" />
          </a>
          <a href="https://github.com/HAROONABUTABAR" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/haroon-abutabar/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkend icon" />
          </a>
        </span>
        <p>
          Results-driven Flutter Developer with three years of experience in
          designing and implementing innovative mobile applications. I am highly
          skilled and motivated, seeking an opportunity to leverage my expertise
          in Flutter development to contribute to cutting-edge projects and play
          a key role in the success of a dynamic development team.
        </p>
        <a href={Cv} target="_blanl" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
