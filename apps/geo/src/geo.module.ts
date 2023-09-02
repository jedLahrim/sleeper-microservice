import { Module } from '@nestjs/common';
import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';

@Module({
  imports: [],
  controllers: [GeoController],
  providers: [GeoService],
})
export class GeoModule {}
