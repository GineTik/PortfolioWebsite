import MyAvatarImage from "@/../public/images/i.jpg"
import Image from "next/image"
import { CgAlarm } from "react-icons/cg"
import { IoSend } from "react-icons/io5"
import TextareaAutosize from 'react-textarea-autosize'
import styles from "./Chat.module.scss"

const Chat = () => {

  return (
    <div className={styles.component}>
        <div className={styles.component__header}>
            <Image src={MyAvatarImage.src} className={styles.component__avatar} alt={"Denis Shevchuk"} width={200} height={200} />
            <div className={styles.component__header_column}>
                <div className={styles.component__name}>Denis Shevchuk</div>
                <div className={styles.component__status}>
                    online
                </div>
            </div>
        </div>
        <div className={styles.component__messages}>
            <div className={styles.component__preview}>
                <div className={styles.preview__icon}>
                    <CgAlarm />
                </div>
                <h3 className={styles.preview__title}>Under development</h3>
                <p className={styles.preview__text}>Chat functionality is still under development, but I am actively working on its completion. <br/>Soon...</p>
            </div>
        </div>
        <div className={styles.component__inputs}>
            <TextareaAutosize className={styles.component__input} placeholder="Write a message..." />
            <div className={styles.component__send}>
                <IoSend />
            </div>
        </div>
    </div>
  )
}

export default Chat
