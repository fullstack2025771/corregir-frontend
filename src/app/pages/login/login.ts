import { Component, inject } from '@angular/core';
// Formularios reactivos-->cada cosa que el usuario escriba sea reconocido por el istema
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName, Validators } from '@angular/forms';
import { Credenciales } from '../../interfaces/credenciales';
import { LoginService } from '../../services/login';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private _loginService = inject(LoginService);


  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('',[Validators.required, Validators.minLength(8)]),

  })
  handleSummit() {

    // const email = this.loginForm.value.emailLogin
    // const password = this.loginForm.value.passwordLogin

    // console.log(email, password)

    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }


    
    const credenciales: Credenciales = {
      emailLogin: this.loginForm.value.emailLogin || '',
      passwordLogin: this.loginForm.value.passwordLogin || ''
    }

    console.log('Credenciales para login', credenciales)
    this._loginService.Login(credenciales).subscribe({
      // manejo de 

      next: (res: any) => {
        console.log(res);
        if (res) {
          localStorage.setItem('token', res.token);
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
          this._loginService.redirectTo();
        }
      },
      error: (err: any) => {
        console.error(err)
        // Swal.fire({
        //   title: "Drag me!",
        //   icon: "success",
        //   draggable: true
        // });
      }
    });
  }
}



