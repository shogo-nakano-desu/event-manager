import { HttpException, HttpStatus } from '@nestjs/common';
export class Email {
  #email: string;
  constructor(email: string) {
    // Should rule be changed depending on organization email?
    // We should think about guest such as unofficial candidate?
    if (email.match(/^.*@organization.com$/)) {
      this.#email = email;
    } else {
      throw new HttpException(
        `Invalid Email address`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
