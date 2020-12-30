
import { Component, OnInit, HostListener } from '@angular/core';
import { HomeService } from '../../home.service'
import { ResultList } from '../../../../global/interfaces'
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {  

  public heroes: Heroe[];
  public next: string;
  public previus: string;  
  
  constructor( private heroesServices:HomeService, private heroeRouter:Router) {    
    // heroes list
    this.heroesServices.getHeroes().subscribe( data => {
      this.heroes = data.results;
    });          
  }
  
  ngOnInit(): void {     
    setTimeout(this.resizeElements, 500); 
  }          

  @HostListener('window:resize', ['$event'])
  onResize() {    
    this.resizeElements();
  }
  
  public resizeElements(): void {
    var count = document.getElementById('id_hoeroes_list').children.length;
    var container = document.getElementById('id_hoeroes_list');
    var elems = container.children;
    var elem;
  
    for (var k = 0; k < count; k++) {
        elem = elems[k];
        elem.style.cssText = null;
        elem.style.position = "relative";
    }
  
    container.style.cssText = null;
  
    var cols = [];
    var nr_cols = Math.floor(container.clientWidth / elems[0].clientWidth);
  
    var margin = (container.clientWidth - (nr_cols * elems[0].clientWidth)) / (nr_cols * 2);
  
    if (nr_cols <= 1) {
      for (var j = 0; j < count; j++) {
        elem = elems[j];
        elem.style.width = container.clientWidth + "px";
      }
      return;
    }
  
    for (var col_nr = 0; col_nr < nr_cols; col_nr++) {
      if (cols[col_nr] == null) cols.push(0);
    }
  
    var i = 0;
    do {
      elem = elems[i];
      elem.style.position = "absolute";
      elem.style.margin = 0;
      elem.style.top = Math.min.apply(Math, cols) + "px";
      elem.style.left = margin + cols.indexOf(Math.min.apply(Math, cols)) * (elem.clientWidth + margin * 2) + "px";
      cols[cols.indexOf(Math.min.apply(Math, cols))] += elem.offsetHeight;
      i++;
    } while (i < count);
      container.style.height = Math.max.apply(Math, cols) + "px";
  }
  
  public getHeroe(pk:number): void {
    this.heroeRouter.navigate(['/heroe', pk]);    
  }

}

export interface Heroe {
  pk:number;
  name: string;
  description: string;
  apparition: string;
  image: string;
  editorial: Editorial;
}

export interface Editorial {
  pk: number;
  name: string;
}