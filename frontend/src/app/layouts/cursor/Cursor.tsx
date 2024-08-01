"use client"
import AnimatedCursor from "react-animated-cursor"

const CursorFollower = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={1}
            innerScale={1}
            outerScale={100}
            outerStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'invert(100%)'
            }}
            innerStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'invert(100%)'
            }}
            clickables={[
                "a",
                "button",
                ".buttons",
                {
                    target: ".cursor_trigger",
                    outerScale: 300
                }
            ]}
        />
    )
}

export default CursorFollower
