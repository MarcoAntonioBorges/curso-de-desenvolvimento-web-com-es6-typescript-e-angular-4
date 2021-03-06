import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
      //Troca pergunta da rodada
      if(this.rodadaFrase.frasePtBr == this.resposta){
        alert('Correto')
        this.rodada++

        if(this.rodada < this.frases.length){
          this.rodadaFrase = this.frases[this.rodada]
        }else{
          alert('Parabens voce ganhou')
        }
      }else{
        alert('Errado')
        //Desconta um coracao
      }
    
  }

}
