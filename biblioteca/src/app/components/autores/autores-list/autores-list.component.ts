import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Autor } from '../../../modules/autor.model';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-autores-list',
  standalone: true,
  imports: [CommonModule, MdbRippleModule],
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss'],
})
export class AutoresListComponent {
  autores: Autor[] = [];

  constructor() {
    this.carregarAutores();
  }

  carregarAutores() {
    const autores = [
      { id: 1, nome: 'Bram Stoker' },
      { id: 2, nome: 'Mary Shelley' },
      { id: 3, nome: 'Edgar Allan Poe' },
      { id: 4, nome: 'Shirley Jackson' },
      { id: 5, nome: 'Stephen King' },
    ];
    this.autores = autores.map((autor) => new Autor(autor.id, autor.nome));
  }
}
