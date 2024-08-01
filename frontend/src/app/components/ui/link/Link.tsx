import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { AnchorHTMLAttributes, useCallback, useRef } from "react"
import { IoIosRocket } from "react-icons/io"
import styles from "./Link.module.scss"

type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

const AnimatedLink = ({className, onClick, href, ...props}: AnimatedLinkProps) => {
    const router = useRouter()
    const coverRef = useRef<HTMLDivElement>(null)

    const handle = useCallback((e: any) => {
        e.preventDefault()
        if (!href || !coverRef?.current)
            return
        
        coverRef.current?.classList.add(styles.cover_animate)
        setTimeout(() => {
            router.replace(href)
            coverRef.current?.classList.remove(styles.cover_animate)
        }, 1000)
        onClick && onClick(e)

    }, [onClick, href])

    return (
        <>
            <a className={cn(className)} onClick={handle} href={href} {...props} />
            <div className={styles.cover} ref={coverRef}>
                <IoIosRocket />
            </div>
        </>
    )
}

export default AnimatedLink
