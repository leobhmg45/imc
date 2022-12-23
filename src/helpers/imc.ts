export type level = {
    titulo: string,
    cor: string,
    icone: 'up'   | 'down',
    valores: number[],
    imc?: number
}

export const levels: level[] = [
    {titulo: 'Magro', cor: '#00BFFF', icone: 'down', valores: [0, 18.5]},
    {titulo: 'Normal', cor: '#0EAD69', icone: 'up', valores: [18.6, 25]},
    {titulo: 'Sobre peso', cor: '#FF6347', icone: 'down', valores: [26, 30]},
    {titulo: 'Obeso', cor: '#DC143C', icone: 'down', valores: [31, 100]},
]

export const calcularImc = (altura: number, peso: number) => {
    const imcValor = peso / (altura * altura)

    parseFloat(imcValor.toFixed(2))
    console.log(imcValor)
    
    for (let i in levels) {
        if (imcValor >= parseFloat(levels[i].valores[0].toFixed(2))  && imcValor <= parseFloat(levels[i].valores[1].toFixed(2))){           
            let levelsCopy  = {...levels}
            levelsCopy[i].imc = parseFloat(imcValor.toFixed(2))
            return levelsCopy[i]
        }    
    }

    return null
}
