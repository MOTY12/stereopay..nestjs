import { CreateMediaDto, GetAllMediaDto, GetMediaDto, UpdateMediaDto } from "./dto/media.dto";
import { MediaService } from "./media.service";
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(createMediaDto: CreateMediaDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entity/media.entity").Media;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    }>;
    findAll(queryString: GetAllMediaDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entity/media.entity").Media[];
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    }>;
    findOne(params: GetMediaDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./entity/media.entity").Media;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    }>;
    search(queryString: GetAllMediaDto): Promise<any>;
    update(params: GetMediaDto, updateMediaDto: UpdateMediaDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(params: GetMediaDto): Promise<any>;
}
