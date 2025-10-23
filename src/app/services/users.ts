import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../interfaces/user';
import { environment} from '../../environments/environments';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';


  // metodos para hacer las peticiones

// metodo POST

postUser(userToCreate : User) {
   return this._httpClient.post(`${this.apiUrl}/users` , userToCreate);
}

getUser(){
  return this._httpClient.get(`${this.apiUrl}/users`);
}
// Metodo put
putUser(userToUpdate: User , id:string){
  return this._httpClient.put(`${this.apiUrl}/users/${id}`,userToUpdate);
}
// Metodo delete

deleteUser(id:string){
  return this._httpClient.delete(`${this.apiUrl}/users/${id}`)
}











}
