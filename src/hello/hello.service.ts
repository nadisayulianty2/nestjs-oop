import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello from service!';
  }

  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
