import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';


export const routes: Routes = [
    {path:'', component: Home, title: 'Inicio'},
    {path:'admin', component: Admin, title: 'Dashboard'},
    {path:'login', component: Login, title: 'Inicio Sesion'},
   
    {path:'products', component: Products, title: 'Productos'},
    {path:'registro', component: Register, title: 'Registro'},
    {path:'**', component: NotFound, title: '404'},
];
