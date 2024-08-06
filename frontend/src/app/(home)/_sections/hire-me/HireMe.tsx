"use client"
import { Title, TitleGreen, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import { Button } from "@/app/_components/ui/button/Button"
import AnimatedLink from "@/app/_components/ui/link/Link"
import { Routes } from "@/configs/Routes.config"
import { IoRocketSharp } from "react-icons/io5"
import styles from "./HireMe.module.scss"

const HireMeSection = () => {
  return (
    <div className={styles.section}>
        <div className={styles.section__background}>
            <IoRocketSharp />
        </div>
        <AnimatedLink className={"cursor_trigger"} href={Routes.hireMe}>
            <Title>
                <TitleRow>
                    <TitleGreen>Let`s Work</TitleGreen>
                </TitleRow>
                <TitleRow>
                    <TitleWhite className={styles.section__together}>Together</TitleWhite>
                </TitleRow>
                <TitleRow className={styles.section__button}>
                    <Button size="flexible">
                    Hire me
                    </Button>
                </TitleRow>
            </Title>
        </AnimatedLink>
    </div>
  )
}

export default HireMeSection
