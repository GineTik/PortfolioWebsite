type AnimationProps = {
    id: string
    animateChildren: boolean
}

type AnimationFunction = (props: AnimationProps) => void

export type { AnimationFunction, AnimationProps }

