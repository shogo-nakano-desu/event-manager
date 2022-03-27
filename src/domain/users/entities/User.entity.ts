import { Id } from '../../common/values/Id.value';
import { UserName } from '../values/UserName.value';
import { Profile } from '../values/Profile.value';
export class User {
  private readonly userId: Id;
  private readonly teamId: Id;

  #firstName: UserName;
  #lastName: UserName;
  #profile: Profile;

  constructor(
    userId: Id,
    firstName: UserName,
    lastName: UserName,
    profile: Profile,
  ) {
    this.userId = userId;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#profile = profile;
  }

  // NestJS的にはGetterをここに書いているのは違うかも。
  get fullName(): string {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
