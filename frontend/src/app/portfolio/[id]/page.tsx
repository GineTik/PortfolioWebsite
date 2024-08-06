"use client"
import styles from "./PortfolioProjectPage.module.scss"
import PresentSection from "./sections/present/page"
import TechnologiesSection from "./sections/technologies/page"

const PortfolioProjectPage = () => {
  return (
    <div className={styles.page}>
      <PresentSection />
      <TechnologiesSection />
    </div>
  )
}

export default PortfolioProjectPage
