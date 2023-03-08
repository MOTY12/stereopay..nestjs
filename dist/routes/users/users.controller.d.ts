import { ChangePasswordDto, CreateUserDto, GetAllUsersDto, GetUserDto, LoginDto, UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(request: any, createUserDto: CreateUserDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<any>;
    me(request: any): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    findAll(request: any, queryString: GetAllUsersDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
        pagination: {
            total: any;
            pages: number;
            page: number;
            limit: number;
        };
    }>;
    findOne(request: any, params: GetUserDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    updateUser(request: any, params: GetUserDto, updateUserDto: UpdateUserDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
    changePassword(request: any, changePasswordDto: ChangePasswordDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    }>;
}
