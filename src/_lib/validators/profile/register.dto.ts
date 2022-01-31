import { IsEmail, IsString, IsBoolean } from 'class-validator';

class RegisterDto {
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public company: string;

  @IsBoolean()
  public agreements: boolean | null;
}

export default RegisterDto;
