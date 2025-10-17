import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private _loginService = inject(LoginService);
  inVisible: boolean = this._loginService.isAdmin();
}
