import { Routes } from '@angular/router';

// Definimos las rutas de la aplicación
export const routes: Routes = [
  // Ruta raíz: Carga el componente ProductsListComponent
  {
    path: '',
    loadComponent: () => import('./Views/products-list/products-list.component').then(m => m.ProductListComponent)
  },
  // Ruta para detalles del Producto: Carga el componente ProductsListComponent
  {
    path: 'products/:id',
    loadComponent: () => import('./Views/products-details/products-details.component').then(m => m.ProductDetailComponent)
  },
  // Ruta para página no encontrada: Carga el componente NotFoundComponent
  {
    path: 'not-found/:id',
    loadComponent: () => import('./Views/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  // Ruta comodín: Redirige cualquier URL no definida a la página principal
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
