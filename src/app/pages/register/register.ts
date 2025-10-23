import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/users';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private userService = inject(UserService);
  private _route = inject(Router)

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('',[Validators.required] ),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl<number | null>(null),
    password: new FormControl<string>('', [Validators.required, ]),
    //password2: new FormControl<string>(''),

  });
  handleSubmit() {
     


    const userData: User = {
      _id: '',
      name: this.registerForm.value.name || '',
      username: this.registerForm.value.username || '',
      email: this.registerForm.value.email || '',
      age: this.registerForm.value.age || 0,
      password: this.registerForm.value.password || '',
      role: "user"
    }

    console.log("Datos del Usuario: ", userData);

    this.userService.postUser(userData).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: "Bien!",
          text: res.mensaje,
          icon: "success"
        }).then(() => {
          this._route.navigate(['/login']);
        })},
        error: (err: any) => {
          console.error(err.error.mensaje);
          Swal.fire({
            title: "Oops",
            text: err.error.mensaje,
            icon: "error"

          })
        }
      })
  }


}
