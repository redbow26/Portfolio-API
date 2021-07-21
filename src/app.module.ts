import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {MongooseModule, MongooseModuleOptions} from '@nestjs/mongoose';
import {EnvironmentVariables} from "./config/config.interface";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      debug: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
          configService: ConfigService<EnvironmentVariables>,
      ): Promise<MongooseModuleOptions> => ({
        autoIndex: true,
        uri: configService.get<string>('MONGODB_URI'),
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    HelloModule,
  ],
})
export class AppModule {}
