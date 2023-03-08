import { IsMongoId, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";


export class CreateMediaDto {
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}

export class GetAllMediaDto {
    @IsOptional()
    @IsNumberString()
    readonly limit: number;

    @IsOptional()
    @IsNumberString()
    readonly page: number;

    @IsOptional()
    @IsString()
    readonly status: string;

    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description: string;
}

export class GetMediaDto {
    @IsMongoId()
    readonly id: string;
}


export class UpdateMediaDto {
    @IsString()
    @IsOptional()
    type: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    url: string;
}
