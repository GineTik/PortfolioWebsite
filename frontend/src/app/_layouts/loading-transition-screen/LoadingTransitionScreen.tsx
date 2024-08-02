"use client"
import { useReduxActions } from "@/hooks/useReduxActions"
import { RootState } from "@/lib/redux/store"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { IoIosRocket } from "react-icons/io"
import { useSelector } from "react-redux"
import styles from "./LoadingTransitionScreen.module.scss"

const LoadingTransitionScreen = () => {
    const loadingTransition = useSelector((state: RootState) => state.loadingTransition.data)
    const {disableLoadingTransition} = useReduxActions()
    const pathname = usePathname()
    

    useEffect(() => {
        disableLoadingTransition()
    }, [pathname])

    return (
        <div className={cn(styles.cover, loadingTransition.transitionInProcess && styles.cover_active)}>
            <IoIosRocket />
        </div>
    )
}

export default LoadingTransitionScreen
