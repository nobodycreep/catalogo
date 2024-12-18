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
    { id: 95403, name: 'Tatos', flavor: 'Limon' ,price: '0,50' , url:'https://dulceza.ec/765-Niara_large/tatos-limon-picante-yupi-50-gr.jpg' },
    { id: 43249, name: 'Fuze-Tea', flavor: 'Te-Negro', price: '0,60' ,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmxw2v2FS8y9k4jfgmm9ytu6U4fMBYYEafw&s' },
    { id: 43243, name: 'Nachos', flavor: 'Chile',price: '0,60',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3r4jGXtSZVHuDwPVk5ySK10Yq07nR4crAvw&s' },
    { id: 42424, name: 'Doritos', flavor: 'Queso',price: '0,65',url:'https://www.supermercadosantamaria.com/documents/10180/10504/172205889_G.jpg' },
    { id: 45646, name: 'Amor', flavor: 'Chocolate',price: '0,50',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SXLTSHqeDGxjWTX56KF33Q3_QQB5LLvDJw&s' },
    { id: 98136, name: 'Cheetos', flavor: 'Queso',price: '0,50',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7h7W3LRWOXWBJrNtMwDvwWyW3NOas3xzGg&s' },
    { id: 97231, name: 'Zucaritas', flavor: 'Leche-Condensada',price: '1,00',url:'https://www.supermercadosantamaria.com/documents/10180/10504/70400_G.jpg' },
    { id: 89443, name: '220V', flavor: 'Frutos-Rojos',price: '0,50',url:'https://www.supermercadosantamaria.com/documents/10180/10504/136403175_G.jpg' },
    { id: 96712, name: 'Coca-Cola', flavor: 'Soda',price: '0,50',url:'https://www.supermercadosantamaria.com/documents/10180/10504/108300363_G.jpg' },
    { id: 10606, name: 'Pepsi', flavor: 'Soda',price: '0,50',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nD715rU9M7bg52CSQxNtDFDboTSbP8_DNg&s' },
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
