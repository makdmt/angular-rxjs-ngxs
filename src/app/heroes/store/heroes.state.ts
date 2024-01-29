import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { HeroesStateModel } from "./heroes.state.models";
import { HeroesService } from "../services/heroes.service";
import { HeroesError, LoadHeroes } from "./heroes.actions";
import { Observable, catchError, tap } from "rxjs";

export const HEROES_DEFAULTS: HeroesStateModel = {
  heroes: [],
}

type Ctx = StateContext<HeroesStateModel>;

@State<HeroesStateModel>({
  name: 'heroState',
  defaults: { ...HEROES_DEFAULTS },
})
@Injectable()
export class HeroesState {
  constructor (
    private heroesService: HeroesService,
  ) {}

  @Action(LoadHeroes)
  public loadHeroes(ctx: Ctx) {
   return this.heroesService.getHeroes().pipe(
      tap(heroes => {
        ctx.patchState({heroes: heroes})
      }),
      catchError(err => ctx.dispatch(new HeroesError(err)))
    )
  }

  @Action(HeroesError)
  public heroesError(ctx: Ctx, { error }: HeroesError) {
    if (error) {
      console.error(error);
    }
  }


}
