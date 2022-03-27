import { HttpException, HttpStatus } from '@nestjs/common';

export class ODTName {
  #name: string;
  constructor(name: string) {
    if (name.length === 0 || name.length > 50) {
      throw new HttpException(
        'Organization, Department, Team name should not be 0 character and more than 50 characters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    this.#name = name;
  }
}
