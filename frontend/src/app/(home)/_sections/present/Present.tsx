"use client"
import BgFilteredText from "@/app/_components/bg-filter-text/BgFilteredText"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { AiFillBug, AiFillCrown } from "react-icons/ai"
import { IoIosRocket } from "react-icons/io"
import { TiStarburst } from "react-icons/ti"
import styles from "./Present.module.scss"

const PresentSection = () => {
  const movingRowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!movingRowRef || !movingRowRef.current)
        return

      const scrolled = window.scrollY
      const left = scrolled / 2
    
      movingRowRef.current.style.transform = `translate3d(${left}px, 0px, 0px)`
    })
  }, [movingRowRef])

  useEffect(() => {
    if (!titleRef?.current || !nameRef?.current)
      return

    titleRef.current.classList.add(styles.startup_animation)
    nameRef.current.classList.add(styles.startup_animation)
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.section__content}>
        <div className={styles.section__title} ref={titleRef}>
          <span className={styles.position__text}>
            Full 
            <span className={styles.green}>Stack</span>
          </span>
          <span className={styles.position__text}>
            Full 
            <span className={styles.green}>Stack</span>
          </span>
          <span className={styles.position__text}>
            Full 
            <span className={styles.green}>Stack</span>
          </span>
        </div>
        <div className={styles.section__second_row}>
          <div className={styles.section__description}>
            <h2 className={styles.description__title} ref={nameRef}>
              <span>Denis</span> 
              <span>Shevhuk</span>
            </h2>
            <BgFilteredText>
              I am a developer who has the skills to create fullstack applications and a strong desire to develop in this area. Despite having relatively little commercial experience, I am ready to work and able to perform tasks effectively both online and offline or in a hybrid format. I want to create quality solutions that benefit users and businesses
            </BgFilteredText>
          </div>
          <div className={`${styles.section__media} cursor_trigger`}>
            <div className={styles.media__wrapper}>
              <Image className={styles.media__image} src={"/images/i.jpg"} alt="text" width={1000} height={1000} />
            </div>
          </div>
          <div className={styles.section__skills_ribbon}>
            <div className={styles.skills_ribbon__content} ref={movingRowRef}>
              <IoIosRocket />
              <span>Hardworking</span>
              <TiStarburst />
              <span>Kind</span>
              <AiFillBug />
              <span>Happy</span>
              <AiFillCrown />
              <span>Learnable</span>
              <IoIosRocket />
              <span>Punctual</span>
              <TiStarburst />
              <span>Hardworking</span>
              <AiFillBug />
              <span>Kind</span>
              <AiFillCrown />
              <span>Happy</span>
              <IoIosRocket />
              <span>Learnable</span>
              <TiStarburst />
              <span>Punctual</span>
              <AiFillBug />
              <span>Punctual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresentSection
