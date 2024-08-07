"use client"
import Link from "next/link"
import { BiLogoTelegram } from "react-icons/bi"
import { RiPhoneFill } from "react-icons/ri"
import { SiGmail } from "react-icons/si"
import { Title, TitleGreen, TitleRow, TitleWhite } from "../_components/text/Title"
import { buttonVariants } from "../_components/ui/button/Button"
import Chat from "./components/chat/Chat"
import styles from "./HireMePage.module.scss"

const HireMePage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__column}>
        <Title className={styles.section__title}>
          <TitleRow>
            <TitleWhite>Hire</TitleWhite>
            <TitleGreen>Me</TitleGreen>
          </TitleRow>
        </Title>
        
        <div className={styles.section__information}>
          <Link className={buttonVariants({ variant: "skill", size: "flexible" })}href="#">
            <BiLogoTelegram />
            Telegram
          </Link>
          <Link className={buttonVariants({ variant: "skill", size: "flexible" })}href="tel:+380672352711">
            <RiPhoneFill />
            +380672352711
          </Link>
          <Link className={buttonVariants({ variant: "skill", size: "flexible" })}href="mailto:densheva18072003@gmail.com">
            <SiGmail />
            densheva18072003@gmail.com
          </Link>
        </div>

        <div className={styles.section__looking_job}>Looking for a job</div>
      </div>
      <div className={styles.section__column}>
        <Chat />
      </div>
    </div>
  )
}

export default HireMePage
