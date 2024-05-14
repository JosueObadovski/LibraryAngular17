import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivrosListComponent } from './components/livros/livros-list/livros-list.component';
import { AutoresListComponent } from './components/autores/autores-list/autores-list.component';
import { EditorasListComponent } from './components/editoras/editoras-list/editoras-list.component';
import { LivrosDetailComponent } from './components/livros/livros-detail/livros-detail.component';
import { AutoresDetailComponent } from './components/autores/autores-detail/autores-detail.component';
import { EditorasDetailComponent } from './components/editoras/editoras-detail/editoras-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      { path: 'livros', component: LivrosListComponent },
      { path: 'autores', component: AutoresListComponent },
      { path: 'editoras', component: EditorasListComponent },
      { path: 'livros/new', component: LivrosDetailComponent },
      { path: 'autores/new', component: AutoresDetailComponent },
      { path: 'editoras/new', component: EditorasDetailComponent },
      { path: 'livros/edit/:id', component: LivrosDetailComponent },
      { path: 'autores/edit/:id', component: AutoresDetailComponent },
      { path: 'editoras/edit/:id', component: EditorasDetailComponent },
    ],
  },
];
