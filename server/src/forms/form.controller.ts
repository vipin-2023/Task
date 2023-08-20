import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from './form.entity';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async createForm(@Body() createFormDto: CreateFormDto): Promise<Form> {
    return this.formService.createForm(createFormDto);
  }

  @Get(':username')
  async findByUsername(@Param('username') username: string): Promise<Form | undefined> {
    return this.formService.findByUsername(username);
  }

  @Put(':username')
  async updateForm(
    @Param('username') username: string,
    @Body() updateFormDto: CreateFormDto,
  ): Promise<Form> {
    return this.formService.updateForm(username, updateFormDto);
  }
}
