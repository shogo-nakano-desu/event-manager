import { HttpException, HttpStatus } from '@nestjs/common';
export class Profile {
  #content: string;
  constructor(content: string) {
    if (content.length > 50000) {
      throw new HttpException(
        'Profile should not be more than 50,000 characters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    this.#content = content;
  }
}
