"use client"
import HireMeSection from "@/app/(home)/_sections/hire-me/HireMe"
import { useToast } from "@/app/_components/ui/toast/UseToast"
import { useEffect } from "react"
import styles from "./PortfolioProjectPage.module.scss"
import ImageSection from "./sections/images/ImageSection"
import PresentSection from "./sections/present/page"
import TechnologiesSection from "./sections/technologies/page"

const PortfolioProjectPage = () => {
  const {toast} = useToast()
  
  useEffect(() => {
    toast({
      title: "Page is under development",
      description: "This page is static, I'm working on a server that will add dynamic data to the page!"
    })
  }, [])

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
