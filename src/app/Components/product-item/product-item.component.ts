import { Component, inject, Input } from '@angular/core';
import { VProduct } from '../../Models/product.model';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service'; // Importar el servicio del carrito

@Component({
  selector: 'app-product-item',                  // 🏷️ Selector para usar este componente en plantillas.
  templateUrl: './product-item.component.html',  // 🖼️ Plantilla HTML para este componente.
  styleUrls: ['./product-item.component.css']    // 🎨 Estilo CSS específico del componente.
})
export class ProductItemComponent {
  private router = inject(Router);               // 🚀 Inyectar el Router para navegación.
  private cartService = inject(CartService);     // 🛒 Inyectar el servicio del carrito.

  @Input() item!: VProduct;                      // 📦 Propiedad de entrada para recibir el producto.

  // 📍 Navega a la página de detalles del producto.
  navigateToID(): void {
    this.router.navigate(['products', this.item.id]);
  }

  // 🛒 Añadir el producto actual al carrito.
  addToCart(): void {
    this.cartService.addToCart(this.item);
    console.log(`Producto añadido al carrito: ${this.item.name}`);
  }
}

