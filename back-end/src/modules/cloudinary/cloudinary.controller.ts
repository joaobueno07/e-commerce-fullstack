import { Controller, Post, UploadedFile } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import type { Express } from 'express';
import type { Multer } from 'multer';

@Controller('image')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload-image')
  uploadImage(@UploadedFile() file: any) {}
}
