import { Module } from '@nestjs/common';

import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import {ConfigModule} from '@nestjs/config'
import * as Joi from 'joi'

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),CarsModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
