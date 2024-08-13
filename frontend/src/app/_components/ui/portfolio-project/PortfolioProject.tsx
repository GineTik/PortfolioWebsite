import AnimationComponent from "@/app/_components/animation/Animation"
import AnimatedLink from "@/app/_components/ui/link/Link"
import { Routes } from "@/configs/Routes.config"
import ParalaxAnimation from "@/lib/animations/ParalaxAnimation"
import Image from "next/image"
import { Nook01, Nook02 } from "../../helps-ui/nook/Nook"
import styles from "./PortfolioProject.module.scss"

type PortfolioProjectProps = 
{
	imageSrc: string
	index: number
	title: string
}

const PortfolioProject = ({index, title, imageSrc}: PortfolioProjectProps) => {
  return (
    <AnimatedLink href={Routes.project(index)} className="cursor_trigger">
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
				<Nook01 className={styles.item__svg_left} />
				<Nook02 className={styles.item__svg_right} />
			</div>
		</AnimationComponent>
	</AnimatedLink>
  )
}

export default PortfolioProject
export type { PortfolioProjectProps as SliderItemProps }

