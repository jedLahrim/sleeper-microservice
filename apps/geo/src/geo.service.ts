import { Injectable } from '@nestjs/common';

@Injectable()
export class GeoService {
  getHello(): string {
    return 'Hello World!';
  }
}
