import { IsEmail, IsString } from 'class-validator';

class UnlockSessionDto {
  @IsEmail()
  public email: string;
}

export default UnlockSessionDto;
