export enum RolesEnum {
  ADMINISTRATOR = 'administrator',
  ACCOUNT_MANAGER = 'accountManager',
  PROJECT_MANAGER = 'projectManager',
  PROJECT_STAFF = 'projectStaff'
}

export interface Role {
  role: string;
  title: string;
  additionalPermissions: Permission[];
}

export interface Permission {
  name: string;
  title: string;
  enabledByDefault: boolean;
}

export class User {
  constructor(
    public id?: number,
    public firstName: string = '',
    public secondName: string = '',
    public email: string = '',
    public isAdmin: boolean = false,
    public role: RolesEnum = RolesEnum.PROJECT_STAFF,
    public permissions: number = 0,
    public additionalPermissions: Permission[] = [],
    public state?: string,
    public oldPassword: string = '',
    public newPassword: string = '',
    public newPasswordRepeat: string = ''
  ) {}

  public static readonly STATE_ACTIVE = 'active';
  public static readonly STATE_BLOCKED = 'blocked';

  private static statesMap = {
    [User.STATE_ACTIVE]: 'Активен',
    [User.STATE_BLOCKED]: 'Заблокирован',
  };

  public isActive(): boolean {
    return this.state === User.STATE_ACTIVE;
  }

  public isBlocked(): boolean {
    return this.state === User.STATE_BLOCKED;
  }

  public isAdministrator(): boolean {
    return this.role === RolesEnum.ADMINISTRATOR;
  }

  // public getStateName(): string | undefined {
  //     return User.statesMap[this.state] as string;
  // }

}
