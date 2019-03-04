import {
  MulterOptionsFactory,
  MulterModuleOptions,
  Injectable
} from '@nestjs/common';
import { path } from path;

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: '/upload_storage'
    };
  }
}
