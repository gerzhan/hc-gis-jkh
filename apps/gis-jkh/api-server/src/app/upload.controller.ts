import {
  Post,
  UseInterceptors,
  UploadedFiles,
  FilesInterceptor,
  Controller,
  Body
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiImplicitFile,
  ApiOperation,
  ApiImplicitParam
} from '@nestjs/swagger';

const FILE_STORE_PATH =
  '/Users/gerzhan/_GERZHAN/HC_GIS_JKH/hc-gis-jkh/tmp/upload_files';
/**
 * @see example https://docs.nestjs.com/recipes/swagger
 * @see multer options https://github.com/expressjs/multer/blob/master/doc/README-ru.md
 *
 * @export
 * @class UploadController
 */
@Controller()
export class UploadController {
  @Post('upload/:workerId')
  @UseInterceptors(FilesInterceptor('file', 100))
  @ApiOperation({ title: 'Загрузка файла для обработки' })
  @ApiConsumes('multipart/form-data')
  @ApiImplicitParam({
    name: 'workerId',
    type: 'string',
    required: true,
    description: 'File worker identifier',
    isArray: true
  })
  @ApiImplicitFile({
    name: 'file',
    required: true,
    description: 'Файл для загрузки'
  })
  uploadFile(@UploadedFiles() file: any, @Param() params: any) {
    console.log('file', file, params);
  }
}
