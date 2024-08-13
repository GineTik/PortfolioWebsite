"use client"
import { AnimationFunction } from "@/lib/animations/AnimationFunction"
import { Slot } from "@radix-ui/react-slot"
import { forwardRef, useEffect, useState } from "react"

type AnimationComponentProps = 
React.AnchorHTMLAttributes<HTMLDivElement> &
{
    children: any
    animate?: AnimationFunction
    animateChildren?: boolean
    asChild?: boolean
}

const AnimationComponent = forwardRef<HTMLDivElement, AnimationComponentProps>(({ animate, animateChildren, asChild, ...props}, ref) => {

    const [id, _] = useState("d" + crypto.randomUUID())
    useEffect(() => {
        const target = `#${id}${animateChildren ? " > *" : ""}`
        animate && animate({
            targetSelector: target,
        })
    }, [animate])

    const Component = asChild ? Slot : "div"

    return (
        <Component {...props} id={id} ref={ref} />
    )
})

export default AnimationComponent
export type { AnimationComponentProps }

