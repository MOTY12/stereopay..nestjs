import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { catchError } from "rxjs";
import { getRepository, Repository } from "typeorm";
import { CreateMediaDto, GetAllMediaDto, UpdateMediaDto } from "./dto/media.dto";
import { Media } from "./entity/media.entity";


@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Media)
        private readonly mediaRepository: Repository<Media>,
    ) {}

    async create(createMediaDto: CreateMediaDto){
       try{
            const media = this.mediaRepository.create({
                ...createMediaDto
            });

            const result = await this.mediaRepository.save(media);

            return {
                statusCode: HttpStatus.CREATED,
                message: 'Media created successfully',
                data: result
            }
        }catch(err){
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Media not created',
                
            }
        }
    }

    async findAll(queryString: GetAllMediaDto){
        try{
            let pageOptions = {
                page: queryString.page || 0,
                limit: (queryString.limit ? (queryString.limit > 100 ? 100 : queryString.limit) : 25),
                status: (queryString.status && ['active', 'inactive'].includes(queryString.status) ? queryString.status : 'active'),
            }
            const result = await this.mediaRepository.find({
                where: {
                    status: pageOptions.status,
                },
                take: pageOptions.limit,
                skip: pageOptions.page * pageOptions.limit,
            });

            return {
                statusCode: HttpStatus.OK,
                message: 'Media found successfully',
                data: result
            }
        }catch(err){
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Media not found',
                
            }
        }
    }

    async findOne(id: any){
        try{
            let modelParameter: any = {
                id: id,
                status: 'active'
              }; 

            const result = await this.mediaRepository.findOne({where: modelParameter});
            return {
                statusCode: HttpStatus.OK,
                message: 'Media found successfully',
                data: result
            }
        }catch(err){
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Media not found',
                
            }
        }
    }

    //Search media by title and description
    async search(queryString: GetAllMediaDto): Promise<any>{
        try{
            let pageOptions = {
                page: queryString.page || 0,
                limit: (queryString.limit ? (queryString.limit > 100 ? 100 : queryString.limit) : 25),
                status: (queryString.status && ['active', 'inactive'].includes(queryString.status) ? queryString.status : 'active'),
            }

            let filter = {
                status: pageOptions.status,
            }

            if(queryString.title){
                filter['title'] = queryString.title;
            }

            if(queryString.description){
                filter['description'] = queryString.description;
            }

            const result = await this.mediaRepository.find({
                where: filter,
                take: pageOptions.limit,
                skip: pageOptions.page * pageOptions.limit,
            });


            // console.log(pageOptions);
            // const result = await this.mediaRepository.find({
            //     where: modelParameter,
            //     take: pageOptions.limit,
            //     skip: pageOptions.page * pageOptions.limit,
            // });
            // console.log(result);
            return {
                statusCode: HttpStatus.OK,
                message: 'Media found successfully',
                data: result
            }
        }catch(err){
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Media not found',

            }
        }
    }

    async update(id: any, updateMediaDto: UpdateMediaDto){
        let modelParameter: any = {
            id: id,
            status: 'active'
          }; 

        const media = await this.mediaRepository.findOne({where: modelParameter});
        
        if(!media){
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Media not found',
            }
        }

        const result = await this.mediaRepository.update(id, updateMediaDto);
        return {
            statusCode: HttpStatus.OK,
            message: 'Media updated successfully',
        }
    }

    async remove(id: string): Promise<any> {
        try{
            let modelParameter: any = {
                id: id,
                status: 'active'
              }; 
            const media = await this.mediaRepository.findOne({where: modelParameter});

            if(!media){
                return {
                    statusCode: HttpStatus.NOT_FOUND,
                    message: 'Media not found',
                }
            }

            const result = await this.mediaRepository.update(id, {
                status: 'inactive',
                deleted_at: new Date()
            });

            return {
                statusCode: HttpStatus.OK,
                message: 'Media deleted successfully'
            }
        }catch(err){
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Media not found',
            }
        }
    }
}