import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import {EnvConfiguration} from '../env.config'


@Module({
  imports: [
    PassportModule,

    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: EnvConfiguration().jwtSecret,
          signOptions: {
            expiresIn: '10d',
          },
        };
      },
    }),
    
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
