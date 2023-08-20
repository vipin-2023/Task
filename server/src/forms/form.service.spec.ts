import { Test, TestingModule } from '@nestjs/testing';
import { FormService } from './form.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form, FormDocument } from './form.entity';

describe('FormService', () => {
  let service: FormService;
  let formModelMock: Model<FormDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FormService,
        {
          provide: getModelToken(Form.name),
          useValue: {
            new: jest.fn(),
            constructor: jest.fn(),
            findOne: jest.fn(),
            findOneAndUpdate: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FormService>(FormService);
    formModelMock = module.get<Model<FormDocument>>(getModelToken(Form.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more test cases for your service methods
});
