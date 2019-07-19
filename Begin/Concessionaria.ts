//Imports...
import Carro from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterface';

export default class Concessionaria implements ConcessionariaInterface{
 
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

  fornecerHorarioDeFuncionamento(): string {
    return 'De segunda a sexta das 08:00 as 18:00'
  }

}