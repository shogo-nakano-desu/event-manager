import { ODTName } from '../values/ODTName.values';
import { Id } from '../../common/values/Id.value';
export class Organization {
  private readonly organizationId: Id;
  #organizationName: ODTName;

  constructor(organizationId: Id, organizationName: ODTName) {
    this.organizationId = organizationId;
    this.#organizationName = organizationName;
  }

  get organizationName(): string {
    return `${this.#organizationName}`;
  }
}
