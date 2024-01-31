import { Selector, StateToken } from "@ngxs/store";
import { SharedState, SharedStateModel } from "./shared.state";

// const stateToken = new StateToken<SharedStateModel>('sharedState')

export class SharedSelectors {
  @Selector([SharedState])
  public static color(state: SharedStateModel): string {
    return state.color;
  }
}
