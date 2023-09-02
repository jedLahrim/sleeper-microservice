import { Controller, Get } from '@nestjs/common';
import { GeoService } from './geo.service';

@Controller()
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get()
  getHello(): string {
    return this.geoService.getHello();
  }
}
