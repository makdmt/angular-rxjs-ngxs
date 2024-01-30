import { Action, State, StateContext, Store } from "@ngxs/store";
import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { ClearUser, SetUser, UpdateCurrentUser } from "./user.actions";
import { HeroesState } from "../../heroes/store/heroes.state";

export interface UserStateModel {
  user: User | null
  // env: AppEnvironment;
}

type Ctx = StateContext<UserStateModel>;

export const USER_DEFAULTS: UserStateModel = {
  user: null,
}

@State<UserStateModel>({
  name: 'user',
  defaults: USER_DEFAULTS,
  children: [HeroesState]
})

@Injectable()
export class UserState {
  constructor(
    private store: Store,
  ) {}

  @Action(SetUser)
  public setUser(ctx: Ctx, { user }: SetUser) {
    ctx.patchState({
      user,
    })
  }

  @Action(UpdateCurrentUser)
  public updateCurrentUser(ctx: Ctx, { user }: UpdateCurrentUser) {
    const state = ctx.getState();
    // ctx.patchState({
    //   ...state.user,
    //   ...user,
    // }) as User;
  }

 @Action(ClearUser)
 public clearUser(ctx: Ctx) {
   ctx.patchState({
     user: null,
   })
 }
}

