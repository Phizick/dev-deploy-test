import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { MongoClient } from 'mongodb';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const databaseHost = this.configService.get<string>('DATABASE_HOST');
    const databasePort = this.configService.get<number>('DATABASE_PORT');
    const databaseUsername = this.configService.get<string>('DATABASE_USERNAME');
    const databasePassword = this.configService.get<string>('DATABASE_PASSWORD');
    const databaseName = this.configService.get<string>('DATABASE_NAME');

    const url = `mongodb://${databaseHost}:${databasePort}/${databaseName}`;

    return {
      type: 'mongodb',
      url,
      database: databaseName,
      entities: [join(__dirname, '../**/*.entity.{js,ts}')],
      synchronize: true,
    };
  }
}
