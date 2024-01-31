import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { SetColor } from "./shared.actions";

export interface SharedStateModel {
  color: string;
}

type Ctx = StateContext<SharedStateModel>;

const SHARED_DEFAULTS: SharedStateModel = {
  color: 'green',
}

@State<SharedStateModel>({
  name: 'sharedState',
  defaults: {...SHARED_DEFAULTS },
})
@Injectable()
export class SharedState {

  @Action(SetColor)
  public setColor(ctx: Ctx, { color }: SetColor) {
    ctx.patchState({color});
  }

}
