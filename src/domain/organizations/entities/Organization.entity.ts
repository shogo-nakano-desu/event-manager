import { OrganizationName } from '../values/OrganizationName.values';
import { Id } from '../../common/values/Id.value';
export class Organization {
  private readonly organizationId: Id;
  #organizationName: OrganizationName;

  constructor(organizationId: Id, organizationName: OrganizationName) {
    this.organizationId = organizationId;
    this.#organizationName = organizationName;
  }

  get organizationName(): string {
    return `${this.#organizationName}`;
  }
}
