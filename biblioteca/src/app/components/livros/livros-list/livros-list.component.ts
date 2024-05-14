import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../modules/livro.model';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-livros-list',
  standalone: true,
  imports: [CommonModule, MdbRippleModule],
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.scss'],
})
export class LivrosListComponent {
  livros: Livro[] = [];

  constructor() {
    this.carregarLivros();
  }

  carregarLivros() {
    const livrosDeTerror = [
      { id: 1, nome: 'Drácula', autor: 'Bram Stoker' },
      { id: 2, nome: 'Frankenstein', autor: 'Mary Shelley' },
      { id: 3, nome: 'O Corvo e Outros Poemas', autor: 'Edgar Allan Poe' },
      {
        id: 4,
        nome: 'A Assombração da Casa da Colina',
        autor: 'Shirley Jackson',
      },
      { id: 5, nome: 'O Iluminado', autor: 'Stephen King' },
    ];
    this.livros = livrosDeTerror.map((livro) => {
      const newLivro = new Livro();
      newLivro.id = livro.id;
      newLivro.nome = livro.nome;
      newLivro.autor = livro.autor;
      return newLivro;
    });
  }
}
