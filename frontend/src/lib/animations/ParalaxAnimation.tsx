import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AnimationFunction, AnimationProps } from "./AnimationFunction"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SliderAnimation = (({targetSelector}: AnimationProps) => {
    
    gsap.fromTo(targetSelector, {
        top: "-200%",
    }, {
        scrollTrigger: {
            trigger: targetSelector,
            start: "top bottom",
            end: `bottom top`,
            scrub: true,
        },
        top: "0%",
    })
}) as AnimationFunction

export default SliderAnimation