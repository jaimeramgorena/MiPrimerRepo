import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicacionModule } from './publicacion/publicacion.module';

@Module({
  imports: [PublicacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
