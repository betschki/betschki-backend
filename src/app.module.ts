import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { EducationModule } from './education/education.module';
import { EmploymentModule } from './employment/employment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Contact } from './contact/contact.entity';
import { Education } from './education/education.entity';
import { ContentModule } from './content/content.module';
import { Content } from './content/content.entity';
import { Employment } from './employment/employment.entity';

@Module({
  imports: [
    ContactModule,
    EducationModule,
    EmploymentModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Contact, Content, Education, Employment],
      synchronize: true,
    }),
    ContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
