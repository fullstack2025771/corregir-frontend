import { Routes } from '@angular/router';
//1. importar todos nuestros componentes pagina
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';

import { authGuard } from './guards/auth-guard';
import { Users} from './pages/admin/users/users';
import { Inventory} from './pages/admin/inventory/inventory'

// importarv el guardian y Especificar que rutas son protegidas

export const routes: Routes = [
    {path:'', component: Home, title: 'Inicio'},
       {
        path: 'dashboard',
        component: Admin,
        title: 'Dashboard',
        canActivate: [authGuard],
        canActivateChild: [authGuard],// proteger rutas hijas
        children: [
            {path: 'users', component: Users},
            {path: 'inventory', component: inventory}
        ]
        },

    {path:'login', component: Login, title: 'Inicio Sesion'},
   
    {path:'products', component: Products, title: 'Productos'},
    {path:'registro', component: Register, title: 'Registro'},
    {path:'**', component: NotFound, title: '404'},
];
