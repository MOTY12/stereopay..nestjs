"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const app_config_1 = require("./app.config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const roles_guard_1 = require("./guards/roles.guard");
const typeorm_1 = require("@nestjs/typeorm");
const media_entity_1 = require("./routes/media/entity/media.entity");
const media_module_1 = require("./routes/media/media.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply()
            .exclude()
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: app_config_1.AppConfig.DB_HOST,
                port: app_config_1.AppConfig.DB_PORT,
                username: app_config_1.AppConfig.DB_USER,
                password: app_config_1.AppConfig.DB_PASSWORD,
                database: app_config_1.AppConfig.DB_NAME,
                entities: [media_entity_1.Media],
                synchronize: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: app_config_1.AppConfigValidationSchema
            }),
            throttler_1.ThrottlerModule.forRoot({
                ttl: app_config_1.AppConfig.TTL,
                limit: app_config_1.AppConfig.LIMIT,
            }),
            media_module_1.MediaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map