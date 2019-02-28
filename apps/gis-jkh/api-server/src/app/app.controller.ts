import { Controller, Get } from '@nestjs/common';

import { AppService, Ping } from './app.service';
import { AboutApplicationDTO } from '@hc/gis-jkh/api-dto';
import { RealtyService } from './realty.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly realtyService: RealtyService
  ) {}

  @Get()
  getData(): string {
    return this.appService.getData();
  }

  @Get('/ping')
  getPingData(): Ping {
    return this.appService.getPingData();
  }

  @Get('/about/api')
  getAbout(): AboutApplicationDTO {
    return this.appService.getAboutApplication();
  }

  @Get('/realty')
  getRealtyList(): Array<any> {
    return this.realtyService.realtyList();
  }

  @Get('/appartment')
  getHouseApartmentsList(): Array<any> {
    return this.realtyService.houseApartmentsList();
  }
}
