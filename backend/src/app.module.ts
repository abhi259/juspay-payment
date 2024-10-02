import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuspayModule } from './juspay/juspay.module';

@Module({
  imports: [JuspayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
