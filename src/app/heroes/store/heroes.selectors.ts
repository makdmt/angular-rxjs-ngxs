import { Selector } from "@ngxs/store";
import { HeroesState } from "./heroes.state";
import { HeroesStateModel, IHero } from "./heroes.state.models";

export class HeroesSelectors {
  @Selector([HeroesState])
  public static heroes(state: HeroesStateModel): IHero[] {
    return state.heroes;
  }
}
