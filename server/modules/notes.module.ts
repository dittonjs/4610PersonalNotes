import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesController } from 'server/controllers/api/notes.controller';
import { Note } from 'server/entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [],
  exports: [],
})
export class NotesModule {}
