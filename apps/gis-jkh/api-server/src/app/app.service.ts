import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): string {
    return 'Welcome to gis-jkh-api-server!';
  }
}
