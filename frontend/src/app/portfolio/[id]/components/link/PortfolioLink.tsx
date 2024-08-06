import Link from "next/link"
import { ReactElement } from "react"
import styles from "./PortfolioLink.module.scss"

type PortfolioLinkProps = {
    text: string
    href: string
    icon: ReactElement
}

const PortfolioLink = ({icon, text, href}: PortfolioLinkProps) => {
  return (
    <Link href={href} className={styles.component}>
        <div className={styles.component__icon}>
            {icon}
        </div>
        {text}
    </Link>
  )
}

export default PortfolioLink
