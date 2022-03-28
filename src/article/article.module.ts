import { UserEntity } from '@app/user/user.entity';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';
import { ArticleController } from '@app/article/article.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
