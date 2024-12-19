import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Inicializa la aplicación con la configuración completa
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
