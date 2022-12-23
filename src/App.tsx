import styles from './App.module.css'
import logo from './assets/powered.png'
import voltar from './assets/leftarrow.png'

import { useState } from 'react'
import { levels, calcularImc, level } from './helpers/imc'
import { GridItem } from './components/GridItem'

const App = () => {
  const [altura, setAltura] = useState<number>(0)
  const [peso, setPeso] = useState<number>(0)
  const [exibir, setExibir] = useState<level | null>(null)

  const handleCalcular = () => {
    if (altura && peso) {
      setExibir(calcularImc(altura, peso))

      // console.log(exibir?.imc)
      // console.log(altura)
      // console.log(peso)
    } else {
      setExibir(null)
    }
  }

  const handleVoltar = () => {
    setExibir(null)
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
          {!exibir &&
            <div className={styles.grid}>
              {levels.map((value, index) => (
                <GridItem key={index} item={value} exibirImc={false} />
              ))
              }
            </div>}
          {exibir &&
            <div className={styles.exibir}>
              <div className={styles.voltar}>
                <img src={voltar} alt="Voltar" width={25} onClick={handleVoltar} />
              </div>
              <GridItem item={exibir} exibirImc={true}/>
            </div>
          }
        </div>

      </div>
    </div >
  )
}

export default App