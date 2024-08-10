"use client"
import { Button, buttonVariants } from "@/app/_components/ui/button/Button"
import AnimatedLink from "@/app/_components/ui/link/Link"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover/Popover"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useState } from "react"
import { IoLogoFigma, IoRocket } from "react-icons/io5"
import styles from "./Skill.module.scss"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type SkillChildrenProps = {
    children: any
}

type SkillGroupProps = SkillChildrenProps & {
    index: number
}

const SkillGroup = ({children, index}: SkillGroupProps) => {
    
    const [borderId, _] = useState("d" + crypto.randomUUID())
    // trial version
    // useGSAP(() => {
    //     gsap.from(`#${borderId}`, {
    //         scrollTrigger: {
    //             trigger: `#${borderId}`,
    //             start: "top 90%"
    //             // end: "top 30%",
    //             // scrub: true
    //         },
    //         duration: 2,
    //         drawSVG: "0"
    //     })
    // }, [])

  return (
    <div className={styles.group}>
        <div className={styles.group__border}>
            <svg viewBox="0 0 1362 51" fill="none" style={{clipPath: "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)"}}>
                <path id={borderId} d="M0 1.5H571.719C590.957 1.5 609.914 6.12563 626.99 14.9869L667.51 36.0131C684.586 44.8744 703.543 49.5 722.781 49.5H1362" strokeWidth="2"></path>
            </svg>
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

type SkillGroupTitleProps = SkillChildrenProps

const SkillGroupTitle = ({children}: SkillGroupTitleProps) => {
    return (
        <h2 className={styles.group__title}>
            {children}
        </h2>
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
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="skill" size="flexible">
                    {children}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={styles.skill__popover} side="top" align="center">
                <div className={styles.popover__content}>
                    <div className={styles.popover__text}>{children} - It is framework similar to a ASP.Net Core. Framework contains services, middlewares, configuration, controllers(executors) and other</div>
                    <div className={styles.popover__links}>
                        <AnimatedLink href={"https://www.figma.com/"} target="_blank" className={buttonVariants({ variant: "popover_link", size: "flexible" })}>
                            <IoLogoFigma />
                        </AnimatedLink>
                        <AnimatedLink>
                            <Button variant="popover_link" size="flexible">
                                <IoRocket />
                                Other link
                            </Button>
                        </AnimatedLink>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export { Skill, SkillContent, SkillGroup, SkillGroupTitle, SkillHeader }

