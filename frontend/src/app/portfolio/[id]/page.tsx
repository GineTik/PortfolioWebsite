"use client"
import HireMeSection from "@/app/(home)/_sections/hire-me/HireMe"
import styles from "./PortfolioProjectPage.module.scss"
import ImageSection from "./sections/images/ImageSection"
import PresentSection from "./sections/present/page"
import TechnologiesSection from "./sections/technologies/page"

const PortfolioProjectPage = () => {
  return (
    <div className={styles.page}>
      <PresentSection />
      <TechnologiesSection />
      <ImageSection />
      <HireMeSection />
    </div>
  )
}

export default PortfolioProjectPage
