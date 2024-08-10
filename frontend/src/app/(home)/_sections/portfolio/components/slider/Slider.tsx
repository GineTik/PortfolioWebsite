import AnimationComponent from "@/app/_components/animation/Animation"
import SliderAnimation from "@/lib/animations/SliderAnimation"
import { cn } from "@/lib/utils"
import { AnchorHTMLAttributes, ReactElement } from "react"
import styles from "./Slider.module.scss"

type SliderProps = 
AnchorHTMLAttributes<HTMLDivElement> & 
{
    children: ReactElement[]
}

// const SliderContent = ({children}: any) => {
//   return (
//     <div className={styles.slider__content}>
//       {children}
//     </div>
//   )
// }

const Slider = ({children, className, ...props}: SliderProps) => {

//   const [content, setContent] = useState([SliderContent, SliderContent, SliderContent])
//   const contentRef = useRef<HTMLDivElement>(null)
//   useEffect(() => {
//     if (!contentRef?.current)
//       return
    
//     setInterval(() => {
//       if (!contentRef?.current)
//         return
      
//       let rows = contentRef.current.children
//       const speed = 0.015
//       for (let i = 0; i < rows.length; i++) {
//         const element = rows[i] as HTMLDivElement
//         const elementOffset = Number(element.style.left
//           .replaceAll("%", "")
//           .replaceAll("-", ""))

//         if (elementOffset > 150) {
//           setContent(previous => {
//             previous.slice(0, 1)
//             previous.concat(SliderContent)
//             return previous
//           })
//           continue
//         }

//         element.style.left = `-${elementOffset + speed}%`
//       }

//     }, 1)
//   }, [contentRef])

  return (
    <div className={cn(styles.slider, className)} {...props}>
        <AnimationComponent className={styles.slider__content} animate={SliderAnimation}>
          	{children}
          	{children}
          	{children}
			{children}
          	{children}
          	{children}
        </AnimationComponent>
    </div>
  )
}

export default Slider
