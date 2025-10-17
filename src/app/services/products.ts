import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product'
import { environment } from '../../environments/environments';
import { Observable, map } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //1.  Inyeccion de dependencias y/o directivas de angiular

 private _httpClient = inject(HttpClient);

 //.2 . Definir la ruta de acceso al backend
 private apiUrl = environment.appUrl;

// 3. Metodos para hacer las peticiones



// peticion post

postProduct(productToCreate : Product){
return this._httpClient.post(this.apiUrl +'/products/crear' , productToCreate);

};


//peticion get

getProducts(){
  return this._httpClient.get(this.apiUrl +'/products/mostrar' );
}


// peticion put 

putProducts(productToUpdate: Product,id: string){
//   return this._httpClient.put(this.apiUrl +'products/actualizar/' + id,
//  productToUpdate);
return this._httpClient.put('${this.apiUrl}/products/actualizar/${id}', productToUpdate);
  };


// peticion delete
deleteProduct(id: string){
  //return this._httpClient.delete(this.apiUrl + id)
return this._httpClient.delete(this.apiUrl + '/products/eliminar/:id',{
  params : {id}
});
};


}
