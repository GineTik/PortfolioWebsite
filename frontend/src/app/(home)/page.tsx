import styles from "./HomePage.module.scss"
import Portfolio from "./sections/portfolio/Portfolio"
import Present from "./sections/present/Present"
import Skills from "./sections/skills/Skills"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Present />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default HomePage
