import { Module } from '@nestjs/common';
import { JuspayController } from './juspay.controller';
import { JuspayService } from './juspay.service';

@Module({
  controllers: [JuspayController],
  providers: [JuspayService],
})
export class JuspayModule {}
