import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AnimationFunction, AnimationProps } from "./AnimationFunction"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SliderAnimation = (({targetSelector}: AnimationProps) => {
    gsap.fromTo(targetSelector, {
        opacity: .5,
        translateY: "15%",
    }, {
        scrollTrigger: {
            trigger: targetSelector,
            end: `bottom 90%`,
            scrub: .5
        },
        opacity: 1,
        translateY: 0,
    })
    gsap.fromTo(targetSelector, {
        opacity: 1,
        translateY: 0,
    }, {
        scrollTrigger: {
            trigger: targetSelector,
            start: "bottom 30%",
            end: `bottom top`,
            scrub: .5
        },
        opacity: .5,
        translateY: "-15%",
    })
}) as AnimationFunction

export default SliderAnimation