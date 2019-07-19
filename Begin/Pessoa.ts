//Imports...
import Carro from './Carro'

export default class Pessoa {
  private nome: string
  private carroPreferido: string
  private carro: Carro

  constructor(nome: string, carroPreferido: string, carro: Carro) {
    this.nome = nome
    this.carroPreferido = carroPreferido
    this.carro = carro
  }

  public getNome(): string {
    return this.nome
  }

  public getCarroPreferido(): string {
    return this.carroPreferido
  }

  public setCarro(carro: Carro): void {
    this.carro = carro
  }

  public getCarro(): Carro {
    return this.carro
  }
}