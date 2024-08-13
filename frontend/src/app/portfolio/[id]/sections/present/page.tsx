import { Nook01, Nook02 } from "@/app/_components/helps-ui/nook/Nook"
import { Title, TitleOutline, TitleWhite } from "@/app/_components/text/Title"
import Image from "next/image"
import { RiGithubFill } from "react-icons/ri"
import { SiGoogledocs } from "react-icons/si"
import PortfolioLink from "../../components/link/PortfolioLink"
import styles from "./PresentSection.module.scss"

const PresentSection = () => {
  return (
    <div>
        <Title className={styles.page__title}>
            <div className={styles.title__row}>
                <TitleOutline className={styles.title__project}>Project</TitleOutline>
            </div>
            <div className={styles.title__row}>
                <TitleWhite>Telegramper</TitleWhite>
            </div>
        </Title>
        
        <div className={styles.page__frame}>
            <div className={styles.page__type}>
                <span>Telegram framework</span>
                <Nook01 className={styles.type__nook01} />
                <Nook02 className={styles.type__nook02} />
            </div>
            <Image className={styles.page__image} src={"https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2023%2F10%2FFeatured_02-1.webp&w=1920&q=75"} alt={"Telegramper"} width={2500} height={2500} />
            <div className={styles.page__description}>
                <span>Telegramper is a framework for creating Telegram bots that offers a user-friendly interface for working with the Telegram API. It simplifies the process of creating bots by providing tools for processing requests, creating interactive elements, etc</span>
                <div className={styles.description__links}>
                    <PortfolioLink
                        text="Github"
                        href="https://github.com/GineTik/Telegramper-TelegramFramework/"
                        icon={<RiGithubFill />}
                    />
                    <PortfolioLink
                        text="Documentation"
                        href="https://github.com/GineTik/Telegramper-TelegramFramework/blob/master/README.md"
                        icon={<SiGoogledocs />}
                    />
                </div>
                <Nook01 className={styles.description__nook01} />
                <Nook02 className={styles.description__nook02} />
            </div>
        </div>
    </div>
  )
}

export default PresentSection
