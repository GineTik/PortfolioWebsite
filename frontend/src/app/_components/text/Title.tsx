import AnimationComponent, { AnimationComponentProps } from "@/app/_components/animation/Animation"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import { cn } from "@/lib/utils"
import styles from "./Title.module.scss"

type TitleChildrenProps = {
	children: any
}

type TitleProps = TitleChildrenProps

const Title = ({children}: TitleProps) => {
    return (
        <h2 className={styles.title}>
			{children}
        </h2>
    )
}

type TitleRowProps = TitleChildrenProps

const TitleRow = ({children}: TitleRowProps) => {
    return (
        <AnimationComponent className={styles.title__row} animate={HeadingAnimation}>
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

type TitleWhiteProps = TitleChildrenProps

const TitleWhite = ({children}: TitleWhiteProps) => {
    return (
        <span className={styles.title__white}>
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

