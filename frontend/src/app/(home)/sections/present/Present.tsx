"use client"
import IImage from "@/../public/images/i.jpg"
import BgFilteredText from "@/app/components/bg-filter-text/BgFilteredText"
import Image from "next/image"
import { useEffect, useRef } from "react"
import styles from "./Present.module.scss"

const Present = () => {
  const movingRowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!movingRowRef || !movingRowRef.current)
        return

      const scrolled = window.pageYOffset;
      const left = scrolled / 2;
    
      movingRowRef.current.style.transform = `translate3d(${left}px, 0px, 0px)`;
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
              20 years old. I'm a university student and a passionate Fullstack developer with extensive knowledge of web technologies. Although I don't have any commercial experience yet, I have created several full-fledged applications that demonstrate my skills in front-end and back-end development. I have experience working with databases and various development tools, and I am eager to apply my knowledge in real projects
            </BgFilteredText>
          </div>
          <div className={`${styles.section__media} cursor_trigger`}>
            <div className={styles.media__wrapper}>
              <Image className={styles.media__image} src={IImage.src} alt="text" width={1000} height={1000} />
            </div>
          </div>
          <div className={styles.section__skills_ribbon}>
            <div className={styles.skills_ribbon__content} ref={movingRowRef}>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
              <span>Next.js</span>
              <span>ASP.NET Core</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Present
