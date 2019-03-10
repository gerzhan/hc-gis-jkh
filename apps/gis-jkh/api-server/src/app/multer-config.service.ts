import {
  MulterOptionsFactory,
  MulterModuleOptions,
  Injectable
} from '@nestjs/common';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: '/upload_storage'
    };
  }
}
