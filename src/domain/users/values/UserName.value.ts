export class UserName {
  #name: string;
  constructor(name: string) {
    if (name.length === 0 || name.length > 30) {
      throw new Error('姓名は１文字以上30文字以下で記述して下さい');
    }
    this.#name = name;
  }
}
