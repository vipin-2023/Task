import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from './form.entity';
import { FormService } from './form.service';
import { FormController } from './form.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
