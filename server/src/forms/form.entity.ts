import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form {
  @Prop({ required: true })
  username: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  dob: string;
}

export type FormDocument = Form & Document;
export const FormSchema = SchemaFactory.createForClass(Form);
