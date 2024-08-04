import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = (configService: ConfigService): TypegooseModuleOptions => {
    return {
        uri: getMongoString(configService),
        ...getMongoOptions()
    };
};

const getMongoString = (configService: ConfigService): string => {
    return 'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTHDATABASE');
}

const getMongoOptions = () => ({
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})