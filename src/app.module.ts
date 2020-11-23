import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profile } from './entitys/profile';
import { User } from './entitys/user';

@Module({
  imports: [
    
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'ys301987',
        database: 'one-to-one',
        logging:true,
        entities: [Profile,User],
        synchronize: true,
      }
    ),
    TypeOrmModule.forFeature([Profile,User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
