import { Component } from '@angular/core';
// Formularios reactivos-->cada cosa que el usuario escriba sea reconocido por el istema
import { ReactiveFormsModule, FormControl, FormGroup, Validator, FormGroupName } from '@angular/forms';
import { Credenciales } from '../../interfaces/credenciales';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm = new FormGroup({
    emailLogin: new FormControl(''),
    passwordLogin: new FormControl('')

  })
  handleSummit() {

    const email = this.loginForm.value.emailLogin
    const password = this.loginForm.value.passwordLogin

    console.log(email, password)

    // const Credenciales : Credenciales = {
    //emailLogin : this.LoginForm.value.emailLogin,
    //passwordLogin: this.LoginForm.value.passwordLogin


  }



}









