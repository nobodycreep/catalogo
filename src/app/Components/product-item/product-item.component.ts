import { Component, inject, Input } from '@angular/core';
import { VProduct } from '../../Models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',                  // 🏷️ Selector para usar este componente en plantillas.
  imports: [],                                   // 📚 Lista de módulos importados (vacío por ahora).
  templateUrl: './product-item.component.html',  // 🖼️ Plantilla HTML para este componente.
  styleUrl: './product-item.component.css'       // 🎨 Estilo CSS específico del componente.
})
export class ProductItemComponent {
  route = inject(Router);                        // 🛠️ Inyección de dependencia para la navegación.
  @Input() item!: VProduct;                      // 📝 Propiedad de entrada que representa un producto.

  navigateToID() {
    // 🌟 Navega a la ruta específica del producto según su ID.
    this.route.navigate(['products', this.item.id]);
  }
}
