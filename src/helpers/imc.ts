export type level = {
    titulo: string,
    cor: string,
    icone: 'up'   | 'down',
    valores: number[],
    imc?: number
}

export const levels: level[] = [
    {titulo: 'Magro', cor: '#00BFFF', icone: 'down', valores: [0, 18.5]},
    {titulo: 'Normal', cor: '#0EAD69', icone: 'up', valores: [18.6, 24.9]},
    {titulo: 'Sobre peso', cor: '#FF6347', icone: 'down', valores: [25, 30]},
    {titulo: 'Obeso', cor: '#DC143C', icone: 'down', valores: [31, 100]},
]

export const calcularImc = (altura: number, peso: number) => {
    const imc = peso / altura * altura

    for (let i in levels) {
        if (imc >= levels[i].valores[0] && imc < levels[i].valores[0]){
            
            levels[i].imc = imc
            return levels[i]
        }    
    }

    return null
}
