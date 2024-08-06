import styles from "./Main.module.scss"

type MainProps = {
    children: any
}

const Main = ({children}: MainProps) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default Main
