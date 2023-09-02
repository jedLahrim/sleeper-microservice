import { Test, TestingModule } from '@nestjs/testing';
import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';

describe('GeoController', () => {
  let geoController: GeoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeoController],
      providers: [GeoService],
    }).compile();

    geoController = app.get<GeoController>(GeoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(geoController.getHello()).toBe('Hello World!');
    });
  });
});
