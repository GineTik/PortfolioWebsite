import styles from "./HomePage.module.scss"
import Portfolio from "./_sections/portfolio/Portfolio"
import Present from "./_sections/present/Present"
import Skills from "./_sections/skills/Skills"

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
