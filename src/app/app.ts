import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemLista } from './item-lista/item-lista';

@Component({
  imports: [RouterOutlet, ItemLista],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lista-de-tarefas');
}
