declare class AddressDto {
    readonly street: String;
    readonly city: String;
    readonly state: String;
    readonly country: String;
}
export declare class CreateUserDto {
    readonly firstName: String;
    readonly middleName: String;
    readonly lastName: String;
    readonly phoneNumber: String;
    readonly emailAddress: String;
    readonly password: String;
    readonly role: String;
    readonly address: AddressDto;
}
export declare class UpdateUserDto {
    readonly firstName: String;
    readonly middleName: String;
    readonly lastName: String;
    readonly phoneNumber: String;
    readonly emailAddress: String;
    readonly imageUrl: String;
    readonly role: String;
    readonly address: AddressDto;
    readonly status: String;
}
export declare class GetUserDto {
    readonly userId: string;
}
export declare class GetAllUsersDto {
    readonly page: number;
    readonly limit: number;
    readonly role: string;
}
export declare class LoginDto {
    readonly emailAddress: String;
    readonly password: String;
    readonly userAgent: String;
}
export declare class ResetPasswordDto {
    readonly emailAddress: String;
    readonly password: String;
    readonly userAgent: String;
    readonly resetToken: String;
}
export declare class VerifyEmailDto {
    readonly verificationToken: String;
}
export declare class ChangePasswordDto {
    readonly oldPassword: String;
    readonly newPassword: String;
}
export declare class GetVerifyEmailDto {
    readonly token: String;
    readonly id: String;
    readonly emailAddress: String;
}
export {};
