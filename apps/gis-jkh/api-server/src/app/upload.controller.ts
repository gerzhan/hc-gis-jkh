import {
  Post,
  UseInterceptors,
  UploadedFiles,
  FilesInterceptor,
  Controller
} from '@nestjs/common';
import { ApiConsumes, ApiImplicitFile, ApiOperation } from '@nestjs/swagger';
/**
 * @see example https://docs.nestjs.com/recipes/swagger
 * @see multer options https://github.com/expressjs/multer/blob/master/doc/README-ru.md
 *
 * @export
 * @class UploadController
 */
@Controller()
export class UploadController {
  @Post('upload')
  @ApiOperation({ title: 'Загрузка файла для обработки' })
  @UseInterceptors(FilesInterceptor('file', { dest: 'upload_files/' }))
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({
    name: 'file',
    required: true,
    description: 'Файл для загрузки'
  })
  uploadFile(@UploadedFiles() files) {
    console.log('file', files);
  }
}
