import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public hash: string;

  @Column()
  public company: string;
}

export default User;
