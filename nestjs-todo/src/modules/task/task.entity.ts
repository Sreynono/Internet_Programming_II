import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIME'})
  createAt: Date;

  @Column({ type: 'datetime', nullable: true})
  completedaT: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
