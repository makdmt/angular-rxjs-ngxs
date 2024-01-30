import { User } from "../models/user";

export class SetUser {
  constructor(public user: User) {}
  public static type = '[User] SetUser';
}

export class UpdateCurrentUser {
  constructor(public user: Partial<User>) {}
  public static readonly type = '[User] UpdateCurrentUser';
}

export class ClearUser {
  public static readonly type = '[User] ClearUser';
}
