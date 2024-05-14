import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editora } from '../../../modules/editora.model';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-editoras-list',
  standalone: true,
  imports: [CommonModule, MdbRippleModule],
  templateUrl: './editoras-list.component.html',
  styleUrls: ['./editoras-list.component.scss'],
})
export class EditorasListComponent {
  editoras: Editora[] = [];

  constructor() {
    this.carregarEditoras();
  }

  carregarEditoras() {
    const editoras = [
      { id: 1, nome: 'Penguin Random House' },
      { id: 2, nome: 'HarperCollins' },
      { id: 3, nome: 'Simon & Schuster' },
      { id: 4, nome: 'Macmillan Publishers' },
      { id: 5, nome: 'Hachette Livre' },
    ];
    this.editoras = editoras.map(
      (editora) => new Editora(editora.id, editora.nome)
    );
  }
}
