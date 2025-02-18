import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AnimationFunction, AnimationProps } from "./AnimationFunction"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const HeadingAnimation = (({targetSelector}: AnimationProps) => {
    gsap.fromTo(targetSelector, {
        opacity: 0,
        translateX: "15%",
        translateY: "15%",
        rotationX: "-60deg",
    }, {
        scrollTrigger: {
            trigger: targetSelector,
            end: `top 50%`,
            scrub: .5
        },
        opacity: 1,
        translateX: 0,
        translateY: 0,
        rotationX: 0 
    })
}) as AnimationFunction

export default HeadingAnimation