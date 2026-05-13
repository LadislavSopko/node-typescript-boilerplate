export interface Greeter {
  greet(): string;
}

export class SimpleGreeter implements Greeter {
  constructor(public name: string) {}
  greet(): string {
    return `Hello, ${this.name}!`;
  }
}

export class FancyGreeter extends SimpleGreeter {
  greet(): string {
    return `Greetings, ${this.name}!`;
  }
}
