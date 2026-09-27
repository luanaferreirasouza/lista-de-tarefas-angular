import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-item-lista',
  styleUrl: './item-lista.css',
  templateUrl: './item-lista.html',
})
export class ItemLista {

  novaTarefa: string = '';
  tarefas = [
    {descricao: 'Oração da manhã', concluida: false},
    {descricao: 'Assistir aula Bootcamp', concluida: false},
    {descricao: 'Ir para a academia', concluida: false}
  ]

  marcarFeito(item:any){
    item.concluida = !item.concluida;
  }

  removerTarefa(item:any){
    // 1. Retornar o número do índice do item que será removido
    const index = this.tarefas.indexOf(item);
    // 2. Remover o item do array de tarefas
    this.tarefas.splice(index, 1);
  }

  adicionarItem(){
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({descricao: this.novaTarefa, concluida: false});
    }
    this.novaTarefa = '';
  }
  contadorItensConcluidos(){
    let count = 0;
    for(let i=0; i< this.tarefas.length; i++){
      if(this.tarefas[i].concluida){
        count++;
      }
    }
    return count;
  }
}   
