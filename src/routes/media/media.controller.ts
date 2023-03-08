import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateMediaDto, GetAllMediaDto, GetMediaDto, SearchMediaDto, UpdateMediaDto } from "./dto/media.dto";
import { MediaService } from "./media.service";


@Controller('media')
export class MediaController {
    constructor(
        private readonly mediaService: MediaService,
    ) {}

    @Post('/')
    create(@Body() createMediaDto: CreateMediaDto) {
        return this.mediaService.create(createMediaDto);
    }

    // @Get('')
    // findAll(@Query() queryString: GetAllMediaDto) {
    //     return this.mediaService.findAll(queryString);
    // }

    @Get(':id')
    findOne(@Param() params: GetMediaDto) {
        return this.mediaService.findOne(params.id);
    }

    @Get('/search')
    search(@Query() queryString: SearchMediaDto) {
        return this.mediaService.search(queryString);
    }


    @Patch(':id')
    update(@Param() params: GetMediaDto, @Body() updateMediaDto: UpdateMediaDto) {
        return this.mediaService.update(params.id, updateMediaDto);
    }


    @Delete(':id')
    remove(@Param() params: GetMediaDto) {
        return this.mediaService.remove(params.id);
    }

}