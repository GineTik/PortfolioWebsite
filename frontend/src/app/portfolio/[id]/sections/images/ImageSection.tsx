import AnimationComponent from "@/app/_components/animation/Animation"
import ParalaxAnimation from "@/lib/animations/ParalaxAnimation"
import Image from "next/image"
import styles from "./ImageSection.module.scss"

const ImageSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__image}>
        <AnimationComponent animate={ParalaxAnimation} asChild>
          <Image src="https://img001.prntscr.com/file/img001/G2Qs0Wy8QGS6SNa4_1-HrA.png" alt={"text"} width={2000} height={5000} />
        </AnimationComponent>
      </div>
      <div className={styles.section__image}>
        <AnimationComponent animate={ParalaxAnimation} asChild>
          <Image src="https://img001.prntscr.com/file/img001/HoVGPLVESbaJCApqNruLCg.png" alt={"text"} width={2000} height={5000} />
        </AnimationComponent>
      </div>
      <div className={styles.section__image}>
        <AnimationComponent animate={ParalaxAnimation} asChild>
          <Image src="https://img001.prntscr.com/file/img001/6PZXyKu6SeGqshhVXU1tJw.png" alt={"text"} width={2000} height={5000} />
        </AnimationComponent>
      </div>
    </div>
  )
}

export default ImageSection
