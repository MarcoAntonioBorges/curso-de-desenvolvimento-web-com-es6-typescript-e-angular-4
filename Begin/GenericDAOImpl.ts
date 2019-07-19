import GenericDAO from "./GenericDAO";

export class GenericDAOImpl<T> implements GenericDAO<T>{
  nomeTabela: string = '';  
  
  inserir(object: T): boolean {
    console.log('Logica de Insert ' + object);
    return true
  }
  atualizar(object: T): boolean {
    console.log('Logica de Update ' + object);
    return true
  }
  remover(id: number): T {
    console.log('Logica de Delete');
    return Object()
  }
  selecionar(id: number): T {
    console.log('Logica de Select');
    return Object()
  }
  selecionarTodos(): [T] {
    console.log('Logica de Select All');
    return [Object()]
  }

  
}