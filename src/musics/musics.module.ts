import { Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MusicsController],
  providers: [MusicsService],
  imports: [PrismaModule],
})
export class MusicsModule {}
