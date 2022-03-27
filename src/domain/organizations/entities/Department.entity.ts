import { ODTName } from '../values/ODTName.values';
import { Id } from '../../common/values/Id.value';
export class Department {
  private readonly departmentId: Id;
  #departmentName: ODTName;

  constructor(organizationId: Id, departmentName: ODTName) {
    this.departmentId = organizationId;
    this.#departmentName = departmentName;
  }

  get organizationName(): string {
    return `${this.#departmentName}`;
  }
}
