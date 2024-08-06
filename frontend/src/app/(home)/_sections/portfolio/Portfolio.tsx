"use client"
import AnimationComponent from "@/app/_components/animation/Animation"
import { Title, TitleGreen, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import { buttonVariants } from "@/app/_components/ui/button/Button"
import AnimatedLink from "@/app/_components/ui/link/Link"
import PortfolioProject from "@/app/_components/ui/portfolio-project/PortfolioProject"
import { Routes } from "@/configs/Routes.config"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import { RiSearchLine } from "react-icons/ri"
import styles from "./Portfolio.module.scss"

const PortfolioSection = () => {
  return (
    <div className={styles.section}>
      <Title>
        <TitleRow>
          <TitleWhite>Portfolio</TitleWhite>
        </TitleRow>
        <TitleRow>
          <TitleGreen>Works</TitleGreen>
          <AnimationComponent className={styles.title__explore} animate={HeadingAnimation}>
            <span>Check out my projects and the technologies I use
            </span>
            <AnimatedLink className={buttonVariants({ size: "flexible" })} href={Routes.portfolio}>
              Explore all
              <RiSearchLine />
            </AnimatedLink>
          </AnimationComponent>
        </TitleRow>
      </Title>

      <div className={styles.section__gallery}>
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/E_lWuO4zSJeGT6D-ePyuew.png"} 
          index={1} 
          title={"Telegramper"} 
        />
        <PortfolioProject 
          imageSrc={"https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2023%2F10%2FFeatured_02-1.webp&w=1920&q=75"} 
          index={2} 
          title={"Portfolio"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/PI_Q9DOhSWCpvZBOcgShyA.png"} 
          index={3} 
          title={"StudyUp"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/E_lWuO4zSJeGT6D-ePyuew.png"} 
          index={4} 
          title={"DropshippingBridge"} 
        />
        <PortfolioProject 
          imageSrc={"https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2023%2F10%2FFeatured_02-1.webp&w=1920&q=75"} 
          index={5} 
          title={"TradeHelper"} 
        />
      </div>
    </div>
  )
}

export default PortfolioSection
