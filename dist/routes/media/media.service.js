"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const media_entity_1 = require("./entity/media.entity");
let MediaService = class MediaService {
    constructor(mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
    async create(createMediaDto) {
        try {
            const media = this.mediaRepository.create(Object.assign({}, createMediaDto));
            const result = await this.mediaRepository.save(media);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Media created successfully',
                data: result
            };
        }
        catch (err) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Media not created',
            };
        }
    }
    async findAll(queryString) {
        try {
            let pageOptions = {
                page: queryString.page || 0,
                limit: (queryString.limit ? (queryString.limit > 100 ? 100 : queryString.limit) : 25),
                status: (queryString.status && ['active', 'inactive'].includes(queryString.status) ? queryString.status : 'active'),
            };
            const result = await this.mediaRepository.find({
                where: {
                    status: pageOptions.status,
                },
                take: pageOptions.limit,
                skip: pageOptions.page * pageOptions.limit,
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Media found successfully',
                data: result
            };
        }
        catch (err) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Media not found',
            };
        }
    }
    async findOne(id) {
        try {
            let modelParameter = {
                id: id,
                status: 'active'
            };
            const result = await this.mediaRepository.findOne({ where: modelParameter });
            if (!result) {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Media not found',
                };
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Media found successfully',
                data: result
            };
        }
        catch (err) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: err.message,
            };
        }
    }
    async search(queryString) {
        try {
            let pageOptions = {
                page: queryString.page || 0,
                limit: (queryString.limit ? (queryString.limit > 100 ? 100 : queryString.limit) : 25),
                status: (queryString.status && ['active', 'inactive'].includes(queryString.status) ? queryString.status : 'active'),
            };
            let filter = {
                status: pageOptions.status,
            };
            if (queryString.title) {
                filter.title = new RegExp(`${queryString.title}`, 'i');
            }
            if (queryString.description) {
                filter.description = new RegExp(`${queryString.description}`, 'i');
            }
            console.log(filter);
            const result = await this.mediaRepository.find({
                where: filter,
                take: pageOptions.limit,
                skip: pageOptions.page * pageOptions.limit,
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Media found successfully',
                data: result
            };
        }
        catch (err) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Media not found',
            };
        }
    }
    async update(id, updateMediaDto) {
        let modelParameter = {
            id: id,
            status: 'active'
        };
        const media = await this.mediaRepository.findOne({ where: modelParameter });
        if (!media) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Media not found',
            };
        }
        const result = await this.mediaRepository.update(id, updateMediaDto);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Media updated successfully',
        };
    }
    async remove(id) {
        try {
            let modelParameter = {
                id: id,
                status: 'active'
            };
            const media = await this.mediaRepository.findOne({ where: modelParameter });
            if (!media) {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Media not found',
                };
            }
            const result = await this.mediaRepository.update(id, {
                status: 'inactive',
                deleted_at: new Date()
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Media deleted successfully'
            };
        }
        catch (err) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Media not found',
            };
        }
    }
};
MediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(media_entity_1.Media)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map