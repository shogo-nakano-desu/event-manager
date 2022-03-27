import { HttpException, HttpStatus } from '@nestjs/common';

export class OrganizationName {
  #name: string;
  constructor(name: string) {
    if (name.length === 0 || name.length > 50) {
      throw new HttpException(
        'Organization name should not be 0 character and more than 50 characters',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.#name = name;
  }
}
