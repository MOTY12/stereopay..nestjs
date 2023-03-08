export declare class CreateMediaDto {
    type: string;
    name: string;
    description: string;
    url: string;
    status: string;
}
export declare class GetAllMediaDto {
    readonly limit: number;
    readonly page: number;
    readonly status: string;
    readonly title: string;
    readonly description: string;
}
export declare class GetMediaDto {
    readonly id: string;
}
export declare class UpdateMediaDto {
    type: string;
    name: string;
    description: string;
    url: string;
}
