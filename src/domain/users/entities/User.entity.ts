import { UserId } from '../values/UserId.value';
import { Name } from '../values/Name.value';
export class User {
  private readonly userId: UserId;
  #firstName: Name;
  #lastName: Name;

  constructor(userId: UserId, firstName: Name, lastName: Name) {
    this.userId = userId;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fullName(): string {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
