import { AnimationFunction } from "@/lib/animations/AnimationFunction"
import { forwardRef, useEffect, useState } from "react"

type AnimationComponentProps = 
React.AnchorHTMLAttributes<HTMLHeadingElement> &
{
    children: any
    animate?: AnimationFunction
    animateChildren?: boolean
}

const AnimationComponent = forwardRef<HTMLDivElement, AnimationComponentProps>(({children, animate, animateChildren, ...props}, ref) => {

    const [id, _] = useState("d" + crypto.randomUUID())
    useEffect(() => {
        animate && animate({
            id: id,
            animateChildren: animateChildren ?? false
        })
    }, [animate])

    return (
        <div {...props} id={id} ref={ref}>
            {children}
        </div>
    )
})

export default AnimationComponent
export type { AnimationComponentProps }

