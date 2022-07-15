import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './track.schema';
import { FileService } from '../file/file.service';
import { AlbumModule } from '../album/album.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    AlbumModule,
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})
export class TrackModule {}
