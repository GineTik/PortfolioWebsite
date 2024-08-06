"use client"
import { Title, TitleRow, TitleWhite } from "../_components/text/Title"
import PortfolioProject from "../_components/ui/portfolio-project/PortfolioProject"
import styles from "./Portfolio.module.scss"

const PortfolioPage = () => {
  return (
    <div className={styles.page}>
      <Title>
        <TitleRow>
          <TitleWhite>Portfolio</TitleWhite>
        </TitleRow>
      </Title>

      <div className={styles.page__gallery}>
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/E_lWuO4zSJeGT6D-ePyuew.png"} 
          index={1} 
          title={"Telegramper"} 
        />
        <PortfolioProject 
          imageSrc={"https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2023%2F10%2FFeatured_02-1.webp&w=1920&q=75"} 
          index={2} 
          title={"Portfolio"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/PI_Q9DOhSWCpvZBOcgShyA.png"} 
          index={3} 
          title={"StudyUp"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/E_lWuO4zSJeGT6D-ePyuew.png"} 
          index={4} 
          title={"DropshippingBridge"} 
        />
        <PortfolioProject 
          imageSrc={"https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2023%2F10%2FFeatured_02-1.webp&w=1920&q=75"} 
          index={5} 
          title={"TradeHelper"} 
        />
      </div>
    </div>
  )
}

export default PortfolioPage
