"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import styles from "./Skills.module.scss"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const getOptions = (trigger: string, percentToTop: number) => ({
      scrollTrigger: {
        trigger: trigger,
        end: `top ${percentToTop}%`,
        scrub: .5
      },
      opacity: 1,
      x: 0,
      y: 0,
      rotationX: 0,
    });

    [60, 60, 60].map((o, i) => 
      gsap.to(
        "." + styles.title__row + `:nth-child(${i+1})`,
        getOptions("." + styles.title__row + `:nth-child(${i+1})`, o)
      ))
    gsap.to("." + styles.title__green, getOptions("." + styles.title__green, 0))
  })

  return (
    <div className={styles.section}>
      <div className={styles.section__icon}>
        <RiArrowDownSLine />
        <RiArrowDownSLine />
        <RiArrowDownSLine />
      </div>
      <h2 className={styles.section__title} ref={titleRef}>
        <div className={styles.title__row}>
          <span className={styles.title__outline}>What</span>
        </div>
        <div className={styles.title__row}>
          <span className={styles.title__white}>can</span>
        </div>
        <div className={styles.title__row}>
          <span className={styles.title__white}>I</span>
          <span className={styles.title__green}>do with my skills?</span>
        </div>
      </h2>
    </div>
  )
}

export default Skills
