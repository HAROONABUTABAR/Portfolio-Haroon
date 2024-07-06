import styles from './ProjectsStyles.module.css';
import nft from '../../assets/ntf_app_dark.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nft}
          link="https://github.com/HAROONABUTABAR/nfs_app_ui.git"
          h3="NTF"
          p="NTF App"
        />
      </div>
    </section>
  );
}

export default Projects;
