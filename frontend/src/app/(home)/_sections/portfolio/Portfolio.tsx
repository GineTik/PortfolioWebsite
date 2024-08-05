"use client"
import AnimationComponent from "@/app/_components/animation/Animation"
import { Title, TitleGreen, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import { buttonVariants } from "@/app/_components/ui/button/Button"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import Link from "next/link"
import { RiSearchLine } from "react-icons/ri"
import styles from "./Portfolio.module.scss"

const Portfolio = () => {
  return (
    <div className="min-h-[1000px]">
      <Title>
        <TitleRow>
          <TitleWhite>Portfolio</TitleWhite>
        </TitleRow>
        <TitleRow>
          <TitleGreen>Works</TitleGreen>
          <AnimationComponent className={styles.title__explore} animate={HeadingAnimation}>
            <span>Check out my projects and the technologies I use
            </span>
            <Link className={buttonVariants({ size: "flexible" })} href="#">
              Explore all
              <RiSearchLine />
            </Link>
          </AnimationComponent>
        </TitleRow>
      </Title>
    </div>
  )
}

export default Portfolio
