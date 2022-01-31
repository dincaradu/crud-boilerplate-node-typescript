import { IsBoolean, IsEmail, IsEmpty, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

class LoginDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsBoolean()
  public rememberMe: boolean | null;
}

export default LoginDto;
