import { Controller, Post, UploadedFile } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('image')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload-image')
  uploadImage(@UploadedFile() file: any) {}
}
