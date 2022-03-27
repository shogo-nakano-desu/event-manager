export class OrganizationName {
  #name: string;
  constructor(name: string) {
    if (name.length === 0) {
      throw new Error('Organization name should be at least 1 character');
    } else if (name.length > 50) {
      throw new Error(
        'Organization name should not be more than 50 characters',
      );
    }
    this.#name = name;
  }
}
