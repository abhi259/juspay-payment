import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('juspay')
export class JuspayController {
  @Get()
  getJustpay() {
    return [];
  }

  @Get(':id')
  getJustpay1(@Param('id') id: string, @Query('type') type: string) {
    return {
      type: type,
      id: id,
    };
  }
}
