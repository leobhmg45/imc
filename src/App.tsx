import styles from './App.module.css'
import logo from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={logo} alt="logo" width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          left side
        </div>
        <div className={styles.rightSide}>
          right side
        </div>
        
      </div>
    </div >
  )
}

export default App