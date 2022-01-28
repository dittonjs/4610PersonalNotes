import { Body, Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Note } from 'server/entities/note.entity';
import { NotesService } from 'server/providers/services/notes.service';

class NotePostBody {
  contents: string;
}

@Controller()
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('/notes')
  public async index(@JwtBody() jwtBody: JwtBodyDto) {
    const notes = await this.notesService.findAllForUser(jwtBody.userId);
    return { notes };
  }

  @Post('/notes')
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: NotePostBody) {
    let note = new Note();
    note.contents = body.contents;
    note.userId = jwtBody.userId;
    note = await this.notesService.createNote(note);
    return { note };
  }

  @Delete('/notes/:id')
  public async destroy(@Param('id') id: string, @JwtBody() jwtBody: JwtBodyDto) {
    const note = await this.notesService.findNoteById(parseInt(id, 10));
    if (note.userId !== jwtBody.userId) {
      throw new HttpException('Unauthorized', 401);
    }
    this.notesService.removeNote(note);
    return { success: true };
  }
}
// routes
//===============================
// VERB       |       path       |    route name     | purpose
// GET         /resources              index           get all resources
// GET         /resources/:id          show            get the resource that matches the id
// POST        /resources              create          create a new resource
// PATCH - PUT /resources/:id          update          update an existing based on id
// DELETE      /resources/:id          destroy         delete a resource
// ======= SPECIAL ==============
// GET         /resources/:id/edit     edit            returns a form that is used to edit resource with id :id
// GET         /resources/new          new             return a form use for creating a new resource

/*
GET /notes;
GET /users/2
GET /users?gender=f&birthmonth=6
GET /profiles?user_id=2
POST /newuser
PUT /user/:id
POST

User
==============================
id    | name   | email       | gender   | birthmonth
==============================
1     | Joseph | asdf@asdf.com  M
==============================

Profile
==============================
PUT / replace entire row

{
  email: 'qwerqqwer@qwer.com'
}

PATCH / update parts of a row
{
  email: 'qwerqqwer@qwer.com'
}
*/