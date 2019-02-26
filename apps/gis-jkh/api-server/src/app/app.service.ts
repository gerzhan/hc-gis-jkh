import { Injectable } from '@nestjs/common';

interface Ping {
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
}
