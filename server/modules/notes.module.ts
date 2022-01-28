import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesController } from 'server/controllers/api/notes.controller';
import { Note } from 'server/entities/note.entity';
import { NotesService } from 'server/providers/services/notes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService],
  exports: [],
})
export class NotesModule {}
