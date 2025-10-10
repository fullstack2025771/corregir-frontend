import { Component, inject, OnInit } from '@angular/core';

// 1. Importamos servicios por que queremos hacer get de los productos

import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';
import { environment } from '../../../environments/environments';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Card implements OnInit {



  // 1. La inyeccion de dependencias y declaracion de variables
  _productService = inject(ProductService);
  // variable
  allProducts: Product[] = []; //vamos a almacenar todos los productos de la base de datos
   baseUrl :  string = environment.appUrl;

  showProducts() {
    //1. Voy a hacer la peticion get
    //2. voy a guardar los productos en mi variable de productos
    //3. Voy a mostrar en mi navegador

    this._productService.getProducts().subscribe({

      // manejo de errores--> Gestion de respuesta del backend
      next: (response: any) => {
        this.allProducts = response.data;
        console.log(this.allProducts)
      }, // respuestas positivas del back
      error: (error: any) => {
        console.error(error);
      }// respuesta de error del back


    })


  }

  ngOnInit(): void {
    // ejecuta una accion al cargarse por primera vez en el navegador

    this.showProducts();
  }
}






// numero : number = 0;
// texto : string = '';
// buleano : boolean = false;
// allProducts : Product[] = []; //vamos a almacenar todos los productos de la base de datos



