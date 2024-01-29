import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';
import { IHero } from '../store/heroes.state.models';

const HEROES_URL = 'https://run.mocky.io/v3/8bbe816b-83ed-4b89-8c8d-fd4f92d65b48';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getHeroes(): Observable<IHero[]> {
    const heroes = this.httpClient.get<IHero[]>(HEROES_URL).pipe(
      delay(1000)
    );
    return heroes;
  }

}
