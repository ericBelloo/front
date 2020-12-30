import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultList } from 'src/app/global/interfaces';
import { Heroe } from './components/heroes/heroes.component';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
    
  private URL_HEROE = 'https://ericbello.pythonanywhere.com/heroes/';  
  
  
  constructor( private httpClient: HttpClient ) { }

  public getHttpGetResponse(query:string){
    return this.httpClient.get(this.URL_HEROE + query);
  }

  public getHeroes(){            
    return this.getHttpGetResponse('heroes-list/')
               .pipe(map((data: ResultList) => data));
  }
 
  public getHeroe(pk:number){
    return this.getHttpGetResponse(`heroe/?pk=${pk}`)
               .pipe(map((data: Heroe) => data));
  }
  
}