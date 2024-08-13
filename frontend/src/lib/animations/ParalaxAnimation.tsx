import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AnimationFunction, AnimationProps } from "./AnimationFunction"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SliderAnimation = (({targetSelector}: AnimationProps) => {
    gsap.fromTo(targetSelector, {
        top: 0,
    }, {
        scrollTrigger: {
            trigger: targetSelector,
            start: "top bottom",
            end: `bottom top`,
            scrub: true,
        },
        top: "-20vw",
    })
}) as AnimationFunction

export default SliderAnimation