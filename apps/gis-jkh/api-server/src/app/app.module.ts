import { Module, MulterModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RealtyService } from './realty.service';
import { UploadController } from './upload.controller';

import { MulterConfigService } from './multer-config.service';
// @see https://docs.nestjs.com/techniques/file-upload
// MulterModule.registerAsync({
//   useClass: MulterConfigService
// });
MulterModule.register({
  dest: '/upload_files'
});

@Module({
  imports: [],
  controllers: [AppController, UploadController],
  providers: [AppService, RealtyService]
})
export class AppModule {}
