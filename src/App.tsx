import styles from './App.module.css'
import logo from './assets/powered.png'
import { useState } from 'react'
import { levels, calcularImc } from './helpers/imc'
import {GridItem} from './components/GridItem'

const App = () => {
  const [altura, setAltura] = useState<number>(0)
  const [peso, setPeso] = useState<number>(0)
  const handleCalcular = () => {
    if (altura && peso){

    } else {
      alert('Digite os valores')
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={logo} alt="logo" width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculo do IMC</h1>
          <input type="number" placeholder='Sua altura - Ex: 1.80' value={altura > 0 ? altura : ''} onChange={e => setAltura(parseFloat(e.target.value))} />
          <input type="number" placeholder='Seu peso - Ex: 80' value={peso > 0 ? peso : ''} onChange={e => setPeso(parseFloat(e.target.value))} />
          <button onClick={handleCalcular}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((value, index) =>(
              <GridItem key={index} item={value} />
            ))
            }
          </div>
        </div>
        
      </div>
    </div >
  )
}

export default App