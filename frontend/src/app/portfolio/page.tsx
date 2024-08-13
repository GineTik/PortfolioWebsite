"use client"
import { Title, TitleRow, TitleWhite } from "../_components/text/Title"
import PortfolioList from "../_components/ui/portfolio-project/list/PortfolioList"
import styles from "./Portfolio.module.scss"

const PortfolioPage = () => {
  return (
    <div className={styles.page}>
      <Title>
        <TitleRow>
          <TitleWhite>Portfolio</TitleWhite>
        </TitleRow>
      </Title>

      <PortfolioList />
    </div>
  )
}

export default PortfolioPage
