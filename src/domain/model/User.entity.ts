import { UserId } from '../value/UserId.value';
import { Name } from '../value/Name.value';
export class User {
  private readonly userId: UserId;
  #firstName: Name;
  #lastName: Name;

  constructor(firstName: Name, lastName: Name) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fullName(): string {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
