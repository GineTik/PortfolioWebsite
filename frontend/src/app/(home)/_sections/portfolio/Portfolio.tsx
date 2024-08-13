"use client"
import AnimationComponent from "@/app/_components/animation/Animation"
import { Title, TitleGreen, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import { buttonVariants } from "@/app/_components/ui/button/Button"
import AnimatedLink from "@/app/_components/ui/link/Link"
import PortfolioList from "@/app/_components/ui/portfolio-project/list/PortfolioList"
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

      <PortfolioList />
    </div>
  )
}

export default PortfolioSection
