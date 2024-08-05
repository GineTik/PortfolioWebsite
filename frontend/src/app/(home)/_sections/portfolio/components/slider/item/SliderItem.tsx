import AnimationComponent from "@/app/_components/animation/Animation"
import AnimatedLink from "@/app/_components/ui/link/Link"
import { Routes } from "@/configs/Routes.config"
import ParalaxAnimation from "@/lib/animations/ParalaxAnimation"
import Image from "next/image"
import styles from "./SliderItem.module.scss"

type SliderItemProps = 
{
	imageSrc: string
	index: number
	title: string
}

const SliderItem = ({index, title, imageSrc}: SliderItemProps) => {
  return (
    <AnimatedLink href={Routes.project(0)} className="cursor_trigger">
		<AnimationComponent className={styles.item}>
			<AnimationComponent className={styles.item__image} animate={ParalaxAnimation}>
				<Image className={styles.item__image_content} src={imageSrc} alt={title} width={1000} height={600} />
			</AnimationComponent>
			<div className={styles.item__title}>
				<div className={styles.item__number}>[0{index}]</div>
				<div className={styles.item__text}>
					<span>{title}</span>
					<span>Explore</span>
				</div>
				<svg className={styles.item__svg_left} viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M-1.39876e-06 0L0 32L32 32C14.3269 32 -6.26248e-07 17.6731 -1.39876e-06 0Z"></path></svg>
				<svg className={styles.item__svg_right} viewBox="0 0 96 123" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V123H95.6387C86.8111 123 78.696 118.154 74.5094 110.382L21.8448 12.6179C17.6582 4.84613 9.54312 3.05176e-05 0.715485 3.05176e-05L0 0Z"></path></svg>
			</div>
		</AnimationComponent>
	</AnimatedLink>
  )
}

export default SliderItem
export type { SliderItemProps }

