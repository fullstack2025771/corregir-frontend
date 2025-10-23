import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActivate} from '@angular/router';
import { LoginService } from '../../services/login';


@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, RouterLinkActivate],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  private _loginService = inject(LoginService);

  logout(){
    this._loginService.logout();
  }
}
