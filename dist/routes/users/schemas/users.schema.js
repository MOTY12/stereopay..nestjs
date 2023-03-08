"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTokenSchema = exports.UserSchema = void 0;
const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    country: String
});
exports.UserSchema = new mongoose.Schema({
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
    firstName: String,
    middleName: { type: String, default: '' },
    lastName: String,
    emailAddress: { type: String, lowercase: true },
    emailAddressVerified: { type: Boolean, default: false },
    phoneNumber: String,
    role: { type: String, enum: ['Admin', 'Sub-Admin', 'Security', 'Staff', 'Visitor'], default: 'Visitor' },
    address: AddressSchema,
    password: { type: String, select: false },
    imageUrl: { type: String, default: '' },
    status: { type: String, default: 'Active' },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
    passwordUpdatedAt: { type: Date, default: new Date() },
    deletedAt: Date
});
exports.UserTokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    token: String,
    userAgent: String,
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
});
//# sourceMappingURL=users.schema.js.map