import { Selector, createSelector } from "@ngxs/store";
import { RolesEnum, User } from "../models/user";
import { UserState, UserStateModel } from "./user.state";

export class UserSelectors {
  public static isRole(...roles: RolesEnum[]): (...userRoles: RolesEnum[]) => boolean {
    return createSelector([UserSelectors.role], (userRole: RolesEnum): boolean => {
      return roles.indexOf(userRole) >= 0;
    });
  }


  @Selector([UserState])
  public static user(state: UserStateModel): User | null {
    return state?.user;
  }

  @Selector([UserSelectors.user])
  public static role(user: User) {
    return user?.role;
  }

}
