import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormModule } from './forms/form.module'; // Import FormModule
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://vipin:12345@vipin.wuidfx7.mongodb.net/?retryWrites=true&w=majority'),//never secure db for ease for assessment
    FormModule, // Include FormModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
