export class UserId {
  #userId: string;
  constructor(userId: string) {
    if (userId === null || userId === undefined) {
      throw new Error('shoud be');
    }
    this.#userId = userId;
  }
}
