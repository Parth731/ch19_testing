import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaOptionService
     *
     */
    private readonly metaOptionsService: MetaOptionsService,
  ) {}

  @Post()
  public createPostMetaOptions(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    return this.metaOptionsService.createPostMetaOptions(
      createPostMetaOptionsDto,
    );
  }
}
