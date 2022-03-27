import { Id } from '../../common/values/Id.value';
import { UserName } from '../values/UserName.value';
export class User {
  private readonly userId: Id;
  private readonly teamId: Id;

  #firstName: UserName;
  #lastName: UserName;

  constructor(userId: Id, firstName: UserName, lastName: UserName) {
    this.userId = userId;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fullName(): string {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
