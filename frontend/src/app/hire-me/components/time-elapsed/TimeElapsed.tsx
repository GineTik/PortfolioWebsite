import { useEffect, useState } from "react"
import styles from "./TimeElapsed.module.scss"

type TimeElapsedProps = {
    date: Date
}

const TimeElapsed = ({date}: TimeElapsedProps) => {

    const [stringDate, setStringDate] = useState<string | null>(null)
    useEffect(() => {
        const interval = setInterval(() => {
            const difference = new Date(Date.now() - date.valueOf())
            const years = difference.getFullYear() - 1970
            const months = difference.getMonth()
            const days = difference.getDay()
            const hours = difference.getHours()
            const minutes = difference.getMinutes()
            const seconds = difference.getSeconds()

            setStringDate(`${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
        }, 1000)

        return () => clearInterval(interval)
    }, [date])

    return (
        <>
            {stringDate ? <div>{stringDate}</div> : <div className={styles.skeleton}></div>}
        </>
    )
}

export default TimeElapsed
