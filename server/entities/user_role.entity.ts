import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { RelationCountAttribute } from 'typeorm/query-builder/relation-count/RelationCountAttribute';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roleId: number;

  @Column()
  userId: number;

  @Column()
  contextId: string;

  @ManyToOne(() => Role, (role) => role.userRoles)
  role: Role;

  @ManyToOne(() => User, (user) => user.userRoles)
  user: User;
}

/*
  <body></body>

  // bread
  // ham
  // cheese
  // pickle
  // lettuce
  // mayo
  // bread

  makeSandwich();

  <div>
    <h1>Hello, world</h1>
  </div>
*/

