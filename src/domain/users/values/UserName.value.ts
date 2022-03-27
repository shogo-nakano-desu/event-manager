import { HttpException, HttpStatus } from '@nestjs/common';
export class UserName {
  #name: string;
  constructor(name: string) {
    if (name.length === 0 || name.length > 30) {
      throw new HttpException(
        'First and last name should not be 0 character and more than 30 characters',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.#name = name;
  }
}
