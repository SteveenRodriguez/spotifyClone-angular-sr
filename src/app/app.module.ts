import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritePageComponent } from './modules/favorites/pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [ //TODO: pueden ir, componentes, directivas, pipes
    AppComponent, FavoritePageComponent
  ],
  imports: [ //TODO: solo se importan otros módulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
