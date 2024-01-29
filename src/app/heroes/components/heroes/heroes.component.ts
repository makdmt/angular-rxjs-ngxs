import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { HeroesSelectors } from '../../store/heroes.selectors';
import { Observable } from 'rxjs';
import { IHero } from '../../store/heroes.state.models';
import { LoadHeroes } from '../../store/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  constructor(
    private store: Store,
  ) {}


  @Select(HeroesSelectors.heroes)
  public heroes$!: Observable<IHero[]>;

  ngOnInit(): void {
    this.store.dispatch(new LoadHeroes())
  }

}
