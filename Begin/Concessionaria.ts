//Imports...
import Carro from './Carro'

export default class Concessionaria {
  private endereco: string
  private listaDeCarro: Array<Carro>

  constructor(endereco: string, listaDeCarro: Array<Carro>) {
    this.endereco = endereco
    this.listaDeCarro = listaDeCarro
  }

  public getEndereco(): string {
    return this.endereco
  }

  public getListaDeCarro(): Array<Carro> {
    return this.listaDeCarro
  }

  public setEndereco(endereco: string): void {
    this.endereco = endereco
  }

  public setListaDeCarro(listaDeCarro: Array<Carro>): void {
    this.listaDeCarro = listaDeCarro
  }

}