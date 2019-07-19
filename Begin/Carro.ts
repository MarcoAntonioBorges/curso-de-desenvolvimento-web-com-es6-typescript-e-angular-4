import Veiculo from './Veiculo'

export default class Carro extends Veiculo{
  private numeroDePortas: number

  constructor(modelo: string, numeroDePortas: number) {
    super()
    this.modelo = modelo
    this.numeroDePortas = numeroDePortas
  }

  public getNumeroDePortas(): number {
    return this.numeroDePortas
  }

  public setNumeroDePortas(numeroDePortas: number): void {
    this.numeroDePortas = numeroDePortas
  }
}