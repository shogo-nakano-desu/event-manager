import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  title: string;
  body: string;
  deletePassword: string;
}

export type PublicItem = Omit<Item, 'deletePassword'>;

const items: Item[] = [
  { id: 1, title: 'Item title', body: 'Hello World!', deletePassword: '1234' },
];

@Injectable()
export class AppService {
  getAllItems(): Item[] {
    return [...items];
  }
  getItem(): string {
    return [...items][0].title;
  }

  getPublicItems(): PublicItem[] {
    return this.getAllItems().map((item) => {
      const publicItem = { ...item };
      delete publicItem.deletePassword;
      return publicItem;
    });
  }
  getPublicItem(): string {
    return this.getItem();
  }
}
