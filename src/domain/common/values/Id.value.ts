import { HttpException, HttpStatus } from '@nestjs/common';

export class Id {
  private readonly id: number;
  constructor(id: number) {
    if (id === null || id === undefined) {
      throw new HttpException('shoud be', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    this.id = id;
  }
}
