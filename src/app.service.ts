import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Fala Professor, testou essa rota por que?';
  }
}
