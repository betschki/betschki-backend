import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hey, this is the backend of <a href='https://betschki.com'>betschki.com</a>! Why don't you head over there?";
  }
}
