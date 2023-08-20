import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form, FormDocument } from './form.entity';
import { CreateFormDto } from './dto/create-form.dto';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>) {}

  async createForm(createFormDto: CreateFormDto): Promise<Form> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  async findByUsername(username: string): Promise<Form | undefined> {
    return this.formModel.findOne({ username }).exec();
  }

  async updateForm(username: string, updateFormDto: CreateFormDto): Promise<Form> {
    await this.formModel.findOneAndUpdate({ username }, updateFormDto).exec();
    return this.findByUsername(username);
  }
}
