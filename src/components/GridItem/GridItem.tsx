import {level} from '../../helpers/imc'
import styles from './GridItem.module.css'
import up from '../../assets/up.png'
import down from '../../assets/down.png'

type Props = {
    item: level,
    exibirImc: boolean
}

export const GridItem = ({item, exibirImc}:Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.cor}}>
            <div className={styles.iconMain}>
                {item.icone === 'up' && <img src={up} alt='Up' width='30'/>}
                {item.icone === 'down' && <img src={down} alt='Down' width='30'/>}
            </div>
            <div className={styles.titleMain}>{item.titulo}</div>
            {
                exibirImc &&
                <div className={styles.titleMain}>{item.imc}</div>
            }
            
        </div>
    )
}