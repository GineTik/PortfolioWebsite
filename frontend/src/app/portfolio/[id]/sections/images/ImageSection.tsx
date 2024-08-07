import AnimationComponent from "@/app/_components/animation/Animation"
import ParalaxAnimation from "@/lib/animations/ParalaxAnimation"
import Image from "next/image"
import styles from "./ImageSection.module.scss"

const ImageSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__column}>
        <AnimationComponent className={styles.section__image} animate={ParalaxAnimation}>
            <Image src="https://img001.prntscr.com/file/img001/nLVwR4vRTgu7wvAmdIvDfA.png" alt={"text"} width={1000} height={1000} />
        </AnimationComponent>
      </div>
      <div className={styles.section__column}></div>
    </div>
  )
}

export default ImageSection
