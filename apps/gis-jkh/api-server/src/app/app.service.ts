import { Injectable } from '@nestjs/common';
import { AboutApplicationDTO } from '@hc/gis-jkh/api-dto';

export interface Ping {
  msg: string;
}

@Injectable()
export class AppService {
  getData(): string {
    return 'Welcome!!! to gis-jkh-api-server!';
  }

  getPingData(): Ping {
    return {msg: "Pong"}
  }

  getAboutApplication(): AboutApplicationDTO {
    const response: AboutApplicationDTO = {
      name: 'api-server',
      version: '0.0.2'
    };
    return response;
  }
}
