import useWindowDimensions from "@/hooks/useWindowDesmensions"
import styles from "./ValidationScreenProvider.module.scss"

type ValidationScreenProviderProps = {  
  children: any
}

const ValidationScreenProvider = ({children}: ValidationScreenProviderProps) => {
  
  if (typeof window === "undefined")
    return

  const {width, height} = useWindowDimensions()

  if (width <= 1000)
    return (<div className={styles.component}>
      At the moment current width ({width}px) not available. Please, increase width.
    </div>)

  const ratio = width / height
  if (ratio > 3.25)
    return (<div className={styles.component}>
      At the moment current ratio (width / height = {(ratio).toFixed(2)}) not available. Please, decreases width or increase height.
    </div>)

  return (
    <>
      {children}
    </>
  )
}

export default ValidationScreenProvider
