import { ODTName } from '../values/ODTName.values';
import { Id } from '../../common/values/Id.value';
export class Team {
  private readonly teamId: Id;
  #teamName: ODTName;

  constructor(teamId: Id, teamName: ODTName) {
    this.teamId = teamId;
    this.#teamName = teamName;
  }

  get teamName(): string {
    return `${this.#teamName}`;
  }
}
