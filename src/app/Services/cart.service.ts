import { Injectable } from '@angular/core';
import { VProduct } from '../Models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: VProduct [] = [];
  private cartSubject: BehaviorSubject<VProduct[]> = new BehaviorSubject<VProduct[]>([]);

  constructor() {}

  // Obtener el carrito como observable
  getCartItems(): Observable<VProduct []> {
    return this.cartSubject.asObservable();
  }

  // Añadir producto al carrito
  addToCart(product: VProduct ): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  // Eliminar producto del carrito
  removeFromCart(product: VProduct ): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.cartSubject.next(this.cartItems);
  }

  // Vaciar el carrito
  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  // Obtener el total de productos en el carrito
  getCartTotal(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }
}
