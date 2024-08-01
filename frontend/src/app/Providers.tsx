"use client"

import ReactLenis from "lenis/react"

type ProvidersProps = {
    children: any
}

const Providers = ({children}: ProvidersProps) => {
    return (
        <ReactLenis root options={{ lerp: 0, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
            {children}
        </ReactLenis>
    )
}

export default Providers
