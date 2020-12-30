import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeRoutingModule } from './home-routing.module'
import { HomeService } from './home.service' 

@NgModule({
  declarations: [
    HeroeComponent,
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HeroeComponent,
    HeroesComponent,
    HomeRoutingModule
  ],
  providers:[
    HomeService
  ]
  
})
export class HomeModule { }
