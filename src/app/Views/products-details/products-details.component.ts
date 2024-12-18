import { Component, inject } from '@angular/core'; // 🔖 Importación de decoradores y utilidades de Angular.
import { ActivatedRoute, Router } from '@angular/router'; // 🔗 Para manejar rutas activas y navegación.
import { ProductService } from '../../Services/product.service'; // 📚 Servicio para obtener los productos.
import { VProduct } from '../../Models/product.model'; // 📖 Interfaz para el modelo de datos del productos.

@Component({
  selector: 'app-products-details', // 💎 Nombre del selector del componente.
  imports: [], // 📂 No hay componentes adicionales importados aquí.
  templateUrl: './products-details.component.html', // 📄 Archivo HTML para la plantilla.
  styleUrl: './products-details.component.css' // 🎨 Archivo CSS para los estilos.
})
export class ProductDetailComponent {
  // 📌 Propiedad para almacenar el libro seleccionado.
  productselected!: VProduct;

  // 🚀 Servicios inyectados para manejar rutas y datos.
  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);
  private ProductService = inject(ProductService);

  constructor() {
    // 🔄 Suscríbete a los parámetros de la ruta activa.
    this.Aroute.params.subscribe(params => {
      const id = params['id']; // Obtiene el ID del parámetro de ruta.

      // 🔍 Busca el producto con el ID proporcionado.
      const product = this.ProductService.getProductById(Number(id));
      console.log(product);

      if (!product) {
        // 🚨 Si no se encuentra el producto, redirige a la página "not-found".
        console.log('Product not found');
        this.route.navigate(['not-found', id]);
      } else {
        // ✅ Si se encuentra el producto, almacénalo en `productselected`.
        this.productselected = product;
      }
    });
  }

  // 🏠 Método para regresar a la página principal.
  gotoHome(): void {
    this.route.navigate(['']);
  }
}

