import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
})
export class LoginComponent {
  usuario!: string;
  senha!: string;

  router = inject(Router);

  login() {
    if (this.usuario == 'admin' && this.senha == '12345678')
      this.router.navigate(['admin/livros']);
    else alert('Credenciais incorretas');
  }
}
