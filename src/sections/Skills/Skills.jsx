import styles from "./SkillsStyles.module.css"
import checkDark from "../../assets/checkmark-light.svg"
import checkLight from "../../assets/checkmark-dark.svg"
import { useTheme } from "../../common/ThemeContext";
import SkillList from '../../common/SkillList';

function Skills(){
  const {theme , toggleTheme} = useTheme();
  const checkIcon = theme === 'light' ?  checkDark : checkLight;
  return(
   <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillsList}>
    <SkillList src={checkIcon} skill="Flutter"/>
    <SkillList src={checkIcon} skill="Dart"/>
    <SkillList src={checkIcon} skill="React"/>
    </div>
    <hr/>
    <div className={styles.skillsList}>
    <SkillList src={checkIcon} skill="Software Development Life Cycle"/>
    <SkillList src={checkIcon} skill="Object-Oriented Programming"/>
    </div>
    <hr/>
    <div className={styles.skillsList}>
    <SkillList src={checkIcon} skill="Git"/>
    </div>
   </section>
  );
}


export default Skills;
