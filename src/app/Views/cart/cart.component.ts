import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { VProduct } from '../../Models/product.model';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [NgFor,NgIf],
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: VProduct[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Suscribirse al carrito
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getCartTotal();
    });
  }

  // Eliminar un producto
  removeItem(product: VProduct): void {
    this.cartService.removeFromCart(product);
  }

  // Vaciar carrito
  clearCart(): void {
    this.cartService.clearCart();
  }
}
