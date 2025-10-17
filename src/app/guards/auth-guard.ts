// los guards -->Proteger contenido del Front
// canActivate --> Protector de rutas -->true o false
// True --> Que si se puede mostrar el contenido
// False --> Que no se puede mostrar este contenido

import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
 const _loginService = inject(LoginService);
 const _router = inject(Router);
  
  // 1 Validacion   1. ya inicio  sesion
  if(!_loginService.isLoggedIn()){
    //Redireccione al inicio de sesion
    alert('No has iniciado sesion')
     _router.navigate(['/login']);
    return false
  }
  
  // 2. Validacion 2. Es Administrador

  if(!_loginService.isAdmin()){
    alert('No tienes permitido entrar a este pagina, seras redireccionado al Inicio');
    _router.navigate(['/']);
    return false;
  }
  return true;
};
