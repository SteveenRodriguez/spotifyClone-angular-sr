import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FavoritePageComponent } from "./pages/favorite-page/FavoritePageComponent";


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule,
  ]
})
export class FavoritesModule { }
