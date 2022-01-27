import { Controller, Get } from '@nestjs/common';

@Controller()
export class NotesController {
  @Get('/notes')
  public index() {
    return { message: 'Hello, world' };
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