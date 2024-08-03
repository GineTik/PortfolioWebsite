import { cn } from "@/lib/utils"
import styles from "./BgFilteredText.module.scss"

type BgFilteredTextProps = {
    children: any
    className?: string
}

const BgFilteredText = ({children, className}: BgFilteredTextProps) => {
  return (
    <div className={cn(styles.text, className)}>
        <span>{children}</span>
        <svg
            style={{
                visibility: "hidden",
                position: "absolute",
            }}
            width="0" 
            height="0" 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1"
        >
            <defs>
                <filter id="round">
                    <feGaussianBlur 
                        in="SourceGraphic"
                        stdDeviation="7"
                        result="blur" />
                    <feColorMatrix 
                        in="blur" 
                        mode="matrix" 
                        values="0 0 0 0 0
                                0 0 0 0 0 
                                0 0 0 0 0 
                                0 0 0 25 -8"
                        result="goo" />
                    <feFlood 
                        floodColor="#1c1917"
                        floodOpacity="1"
                        result="color"
                    />
                    <feComposite in="color" in2="goo" operator="atop" result="compose" />
                    <feComposite in="SourceGraphic" in2="compose" operator="atop" />
                </filter>
            </defs>
        </svg>
    </div>
  )
}

export default BgFilteredText
