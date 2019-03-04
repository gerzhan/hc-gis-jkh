import {
  Injectable,
  Post,
  UseInterceptors,
  FileInterceptor,
  UploadedFile
} from '@nestjs/common';

/**
 * @see https://docs.nestjs.com/techniques/file-upload
 */

@Injectable()
export class UploadFilesService {
  @Post('upload')
  @UseInterceptors(FilesInterceptor('file'))
  uploadFile(@UploadedFiles() files) {
    console.log('file', files);
  }
}
