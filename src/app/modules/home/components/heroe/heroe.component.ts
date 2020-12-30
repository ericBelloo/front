import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service'
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroes/heroes.component';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public pk: number;
  public heroe: Heroe;

  constructor( private activateRouter: ActivatedRoute, private heroeServices: HomeService) {
    this.activateRouter.params.subscribe( data => {      
      this.pk = data['pk'];
    });
    // get heroe
    this.heroeServices.getHeroe(this.pk).subscribe((data: Heroe) => {           
      this.heroe = data;      
    });
  }

  ngOnInit(): void {
  }

}
