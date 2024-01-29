export class LoadHeroes {
  public static type = '[HEROES] LoadHeroes';
}

export class HeroesError {
  constructor (public error?: unknown) {}
  public static type = '[HEROES] HeroesError';
}
