import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from '../file/file.service';
import { Track, TrackSchema } from '../track/track.schema';
import { Album, AlbumSchema } from './dto/album.schema';
import { GenresModule } from '../genres/genres.module';
import { GenresSchema } from '../genres/genres.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Album.name, schema: AlbumSchema },
      { name: Track.name, schema: TrackSchema },
      { name: GenresModule.name, schema: GenresSchema },
    ]),
    GenresModule,
  ],
  exports: [AlbumService],
  controllers: [AlbumController],
  providers: [AlbumService, FileService],
})
export class AlbumModule {}
