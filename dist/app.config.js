"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigValidationSchema = exports.AppConfig = void 0;
const dotenv = require("dotenv");
const Joi = require("joi");
dotenv.config();
exports.AppConfig = process.env;
exports.AppConfigValidationSchema = Joi.object({
    PORT: Joi.number().required(),
    NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
    APPLICATION_KEY: Joi.string().required(),
    NAME: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    TTL: Joi.number().required(),
    LIMIT: Joi.number().required(),
    MAIL_HOST: Joi.string().required(),
    SECURE: Joi.string().required(),
});
//# sourceMappingURL=app.config.js.map