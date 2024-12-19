import { Injectable } from '@angular/core';
import { VProduct } from '../Models/product.model';

@Injectable({
  providedIn: 'root', //Hace que el servicio esté disponible en toda la aplicación.
})
export class ProductService {
  /**
   * Lista estática de productos como ejemplo.
   */
  listaProductos: VProduct[] = [
    { id: 95403, name: 'Tatos', flavor: 'Limon' ,price: 0.50 , url:'https://rosendoguaman.com.ec/wp-content/uploads/2024/03/7861065509159tatoslimonpicante50gr.png' },
    { id: 43249, name: 'Fuze-Tea', flavor: 'Te-Negro', price: 0.60 ,url:'https://tofuu.getjusto.com/orioneat-local/resized2/LLJyj7L4FJ9tAD6Ze-800-x.webp' },
    { id: 43243, name: 'Nachos', flavor: 'Chile',price: 0.60,url:'https://www.tostitos.com/sites/tostitos.com/files/2024-11/H%20OCL%20%281%29.png' },
    { id: 42424, name: 'Doritos', flavor: 'Queso',price: 0.65,url:'https://laprincipaldelicores.com/cdn/shop/files/snacksdoritosnachocheese.png?v=1717462596' },
    { id: 45646, name: 'Amor', flavor: 'Chocolate',price: 0.50,url:'https://www.majotrade.com/wp-content/uploads/2021/09/Galletas-Wafer-AMOR-Chocolate-60-x-100-gr..png' },
    { id: 98136, name: 'Cheetos', flavor: 'Queso',price: 0.50,url:'https://farmaenlace.vtexassets.com/arquivos/ids/174731/0000141419-1.png?v=638500863734530000' },
    { id: 97231, name: 'Zucaritas', flavor: 'Leche-Condensada',price: 1.00,url:'https://www.aki.com.ec/wp-content/uploads/2024/12/7702103124883.png' },
    { id: 89443, name: '220V', flavor: 'Frutos-Rojos',price: 1.00,url:'https://mitienda.ec/wp-content/uploads/2024/06/220v_original_600ml.webp' },
    { id: 96712, name: 'Coca-Cola', flavor: 'Soda',price: 1.50,url:'https://www.coca-cola.com/content/dam/onexp/co/es/brands/coca-cola/coca-cola-original/ccso_600ml_750x750.png' },
    { id: 10606, name: 'Pepsi', flavor: 'Soda',price: 1.00,url:'https://alsuper.online/products/315030_p.webp' },
    { id: 64881, name: 'Mountain Dew', flavor: 'Radiactivo',price: 50.00,url:'https://www.bigbasket.com/media/uploads/p/l/40185457_6-mountain-dew-soft-drink.jpg' },
    { id: 99999, name: 'IPhone de Temu 😍😍', flavor: 'De Temu',price: 5,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ImC-6Bvpq71CDqHn0VtMhYrCmpVVPu_gSzzwjdDOfezIjPVpBX5VCynWGDtBlz3H2L4&usqp=CAU' }
  ];

  constructor() {}

  /**
   * 📘 Obtiene todos los productos.
   * @returns Lista de productos (`VProducts[]`).
   */
  getProducts(): VProduct[] {
    return this.listaProductos; // Retorna la lista de productos.
  }

  /**
   * 🔍 Busca un producto por su ID.
   * @param id - Identificador del producto.
   * @returns Un producto (`VProduct`) o `undefined` si no existe.
   */
  getProductById(id: number): VProduct | undefined {
    // 🌀 Itera por la lista de productos y compara el ID.
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.listaProductos[i].id === id) {
        return this.listaProductos[i]; //Retorna el producto si lo encuentra.
      } 
    }
    return undefined; //Retorna `undefined` si no se encuentra el producto.
  }
}
