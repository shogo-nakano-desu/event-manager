export class Id {
  private readonly id: number;
  constructor(id: number) {
    if (id === null || id === undefined) {
      throw new Error('shoud be');
    }
    this.id = id;
  }
}
