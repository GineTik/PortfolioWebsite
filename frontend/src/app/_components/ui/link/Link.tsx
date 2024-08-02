import { useReduxActions } from "@/hooks/useReduxActions"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { AnchorHTMLAttributes, useCallback } from "react"

type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

const AnimatedLink = ({className, onClick, href, ...props}: AnimatedLinkProps) => {
    const router = useRouter()
    const {enableLoadingTransition} = useReduxActions()

    const handle = useCallback((e: any) => {
        e.preventDefault()
        if (!href)
            return
        
        enableLoadingTransition()
        setTimeout(() => {
            router.push(href)
        }, 1000)
        onClick && onClick(e)

    }, [onClick, href])

    return (
        <>
            <a className={cn(className)} onClick={handle} href={href} {...props} />
        </>
    )
}

export default AnimatedLink
