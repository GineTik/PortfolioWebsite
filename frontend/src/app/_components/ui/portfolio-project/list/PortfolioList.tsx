import PortfolioProject from '../PortfolioProject'
import styles from "./PortfolioList.module.scss"

const PortfolioList = () => {
  return (
    <div className={styles.component}>
      <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/G2Qs0Wy8QGS6SNa4_1-HrA.png"}
          index={1} 
          title={"Telegramper"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/fzlV41p_S-a3JMXEHl-i5w.png"} 
          index={2} 
          title={"Portfolio"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/EpvLTZlVSwmiOuoquLyMzw.png"} 
          index={3} 
          title={"StudyEra"}
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/NWKpmzwaROGUQ7Cax4cb8A.png"} 
          index={4} 
          title={"DropshippingBridge"} 
        />
        <PortfolioProject 
          imageSrc={"https://img001.prntscr.com/file/img001/3JQJ6J_-RDS_6Cj3WkuUCA.png"} 
          index={5} 
          title={"TradeHelper"}
        />
    </div>
  )
}

export default PortfolioList
