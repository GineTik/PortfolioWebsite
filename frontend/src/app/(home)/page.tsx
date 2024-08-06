import styles from "./HomePage.module.scss"
import HireMeSection from "./_sections/hire-me/HireMe"
import PortfolioSection from "./_sections/portfolio/Portfolio"
import PresentSection from "./_sections/present/Present"
import SkillsSection from "./_sections/skills/Skills"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <PresentSection />
      <SkillsSection />
      <PortfolioSection />
      <HireMeSection />
    </div>
  )
}

export default HomePage
