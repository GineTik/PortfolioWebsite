import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useState } from "react"

type AnimationTextProps = {
    children: any
    className?: string
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AnimationText = ({children, ...props}: AnimationTextProps) => {

    const [id, _] = useState("d" + crypto.randomUUID())
    useGSAP(() => {
        gsap.to(`#${id}`, {
            scrollTrigger: {
                trigger: `#${id}`,
                end: `top 65%`,
                scrub: .5
            },
            opacity: 1,
            x: 0,
            y: 0,
            rotationX: 0,
        })
    }, [])

  return (
    <div {...props} id={id}>
      {children}
    </div>
  )
}

export default AnimationText
