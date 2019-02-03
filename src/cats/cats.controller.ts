import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Param,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action creates a new cat';
  }

  @Get()
  findAll(@Query() query) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  PaymentRequestUpdateEvent(@Param('id') id, @Body() updateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}
