import IImage from "@/../public/images/i.jpg"
import BgFilteredText from "@/app/components/bg-filter-text/BgFilteredText"
import Image from "next/image"
import styles from "./Present.module.scss"

const Present = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__position}>
        <span className={styles.position__text}>
          Junior 
          <span className={styles.green}>FullStack</span>
        </span>
        <span className={styles.position__text}>
          Junior 
          <span className={styles.green}>FullStack</span>
        </span>
        <span className={styles.position__text}>
          Junior 
          <span className={styles.green}>FullStack</span>
        </span>
      </div>
      <div className={styles.section__second_row}>
        <div className={styles.section__description}>
          <h2 className={styles.description__title}>Denis Shevhuk</h2>
          <BgFilteredText>
            20 years old. I'm a university student and a passionate Fullstack developer with extensive knowledge of web technologies. Although I don't have any commercial experience yet, I have created several full-fledged applications that demonstrate my skills in front-end and back-end development. I have experience working with databases and various development tools, and I am eager to apply my knowledge in real projects
          </BgFilteredText>
        </div>
        <div className={styles.section__media}>
          <div className={styles.media__wrapper}>
            <Image className={styles.media__image} src={IImage.src} alt="text" width={1000} height={1000} />
          </div>
        </div>
        
      </div>
    </div>
  )
} 

export default Present
