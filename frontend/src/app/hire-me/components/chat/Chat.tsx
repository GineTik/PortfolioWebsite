import MyAvatarImage from "@/../public/images/i.jpg"
import Image from "next/image"
import { IoSend } from "react-icons/io5"
import styles from "./Chat.module.scss"

const Chat = () => {
  return (
    <div className={styles.component}>
        <div className={styles.component__header}>
            <Image src={MyAvatarImage.src} className={styles.component__avatar} alt={"Denis Shevchuk"} width={200} height={200} />
            <div className={styles.component__header_column}>
                <div className={styles.component__name}>Denis Shevchuk</div>
                <div className={styles.component__online}>
                    online
                </div>
            </div>
        </div>
        <div className={styles.component__messages}></div>
        <div className={styles.component__inputs}>
            <div className={styles.component__input}>
                Write a message...
            </div>
            <div className={styles.component__send}>
                <IoSend />
            </div>
        </div>
    </div>
  )
}

export default Chat
