"use client"
import { Button } from "@/app/_components/ui/button/Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useState } from "react"
import styles from "./Skill.module.scss"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type SkillChildrenProps = {
    children: any
}

type SkillGroupProps = SkillChildrenProps & {
    index: number
}

const SkillGroup = ({children, index}: SkillGroupProps) => {
    
    const [borderId, _] = useState("d" + crypto.randomUUID())
    useGSAP(() => {
        gsap.to(`#${borderId}`, {
            scrollTrigger: {
                trigger: `#${borderId}`,
                end: "top 30%",
                scrub: true
            },
            y: 0,
        })
    }, [])

  return (
    <div className={styles.group}>
        <div className={styles.group__border} id={borderId}>
            <svg viewBox="0 0 1362 51" fill="none" style={{clipPath: "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)"}}><path d="M0 1.5H571.719C590.957 1.5 609.914 6.12563 626.99 14.9869L667.51 36.0131C684.586 44.8744 703.543 49.5 722.781 49.5H1362" strokeWidth="2"></path></svg>
        </div>
        <div className={styles.group__inner}>
            <div className={styles.group__number}>00{index}</div>
            {children}
        </div>
    </div>
  )
}

type SkillHeaderProps = SkillChildrenProps

const SkillHeader = ({children}: SkillHeaderProps) => {

    const [id, _] = useState("d" + crypto.randomUUID())
    useGSAP(() => {
        gsap.to(`#${id}`, {
            scrollTrigger: {
                trigger: `#${id}`,
                end: "top 50%",
                scrub: .5
            },
            x: 0,
            opacity: 1
        })
    }, [])

    return (
        <div className={styles.group__header} id={id}>
            {children}
        </div>
    )
}

type SkillContentProps = SkillChildrenProps

const SkillContent = ({children}: SkillContentProps) => {

    const [id, _] = useState("d" + crypto.randomUUID())
    useGSAP(() => {
        gsap.to(`#${id}`, {
            scrollTrigger: {
                trigger: `#${id}`,
                start: "top 90%",
                end: "top 50%",
                scrub: .5
            },
            x: 0,
            opacity: 1
        })
    }, [])

    return (
        <div className={styles.group__content} id={id}>
            {children}
        </div>
    )
}

type SkillProps = SkillChildrenProps

const Skill = ({children}: SkillProps) => {
    return (
        <Button variant="skill" size="flexible">
            {children}
        </Button>
    )
}

export { Skill, SkillContent, SkillGroup, SkillHeader }

