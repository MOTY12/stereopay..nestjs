import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { ChangePasswordDto, CreateUserDto, GetAllUsersDto, LoginDto, UpdateUserDto } from './dto/user.dto';
import { User, UserToken } from './interfaces/user.interface';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private readonly UserModel;
    private readonly userTokenModel;
    private readonly configService;
    constructor(UserModel: Model<User>, userTokenModel: Model<UserToken>, configService: ConfigService);
    create(userInfo: any, createUserDto: CreateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    me(userInfo: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    findAll(userInfo: any, queryString: GetAllUsersDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
        pagination: {
            total: any;
            pages: number;
            page: number;
            limit: number;
        };
    }>;
    findOne(userInfo: any, id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    updateUser(userInfo: any, id: string, updateUserDto: UpdateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    changePassword(userInfo: any, changePasswordDto: ChangePasswordDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    remove(id: number): string;
}
