import AnimationComponent, { AnimationComponentProps } from "@/app/_components/animation/Animation"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import { cn } from "@/lib/utils"
import { AnchorHTMLAttributes } from "react"
import styles from "./Title.module.scss"

type TitleChildrenProps = {
	children: any
}

type TitleProps = AnchorHTMLAttributes<HTMLHeadingElement> & TitleChildrenProps

const Title = ({children, className, ...props}: TitleProps) => {
    return (
        <h2 className={cn(styles.title, className)} {...props}>
			{children}
        </h2>
    )
}

type TitleRowProps = AnchorHTMLAttributes<HTMLDivElement> & TitleChildrenProps

const TitleRow = ({children, className, ...props}: TitleRowProps) => {
    return (
        <AnimationComponent className={cn(styles.title__row, className)} animate={HeadingAnimation} {...props}>
        	{children}
        </AnimationComponent>
    )
}

type TitleOutlineProps = TitleChildrenProps

const TitleOutline = ({children}: TitleOutlineProps) => {
    return (
        <span className={styles.title__outline}>
			{children}
        </span>
    )
}

type TitleWhiteProps = AnchorHTMLAttributes<HTMLSpanElement> & TitleChildrenProps

const TitleWhite = ({children, className, ...props}: TitleWhiteProps) => {
    return (
        <span className={cn(styles.title__white, className)} {...props}>
			{children}
        </span>
    )
}

type TitleGreenProps = TitleChildrenProps & AnimationComponentProps

const TitleGreen = ({children, className, ...props}: TitleGreenProps) => {
    return (
        <AnimationComponent className={cn(styles.title__green, className)} {...props}>
			{children}
        </AnimationComponent>
    )
}

export { Title, TitleGreen, TitleOutline, TitleRow, TitleWhite }

