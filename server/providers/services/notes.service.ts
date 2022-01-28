import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'server/entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  findAllForUser(userId: number): Promise<Note[]> {
    return this.noteRepository.find({
      where: { userId },
    });
  }

  createNote(note: Note): Promise<Note> {
    return this.noteRepository.save(note);
  }

  findNoteById(id: number) {
    return this.noteRepository.findOne(id);
  }

  removeNote(note: Note) {
    this.noteRepository.delete(note);
  }
}
