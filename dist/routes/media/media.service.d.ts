import { HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateMediaDto, GetAllMediaDto, UpdateMediaDto } from "./dto/media.dto";
import { Media } from "./entity/media.entity";
export declare class MediaService {
    private readonly mediaRepository;
    constructor(mediaRepository: Repository<Media>);
    create(createMediaDto: CreateMediaDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Media;
    } | {
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    }>;
    findAll(queryString: GetAllMediaDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Media[];
    } | {
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    }>;
    findOne(id: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Media;
    } | {
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    }>;
    search(queryString: GetAllMediaDto): Promise<any>;
    update(id: any, updateMediaDto: UpdateMediaDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<any>;
}
