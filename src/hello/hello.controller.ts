import { Controller, Get, Param } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  sayHello(): string {
    return this.helloService.getHello();
  }

  @Get(':name')
  greet(@Param('name') name: string): string {
    // return `Hello, ${name}!`;
    return this.helloService.greet(name);
  }
}
