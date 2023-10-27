import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(
        routes,
        withPreloading(PreloadAllModules)
      ),
      importProvidersFrom(
        HttpClientModule,
        BrowserAnimationsModule,
      ),
    ]

  }).catch(err => console.error(err)) 
