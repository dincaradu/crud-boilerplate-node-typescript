import { IsEmail, IsString } from 'class-validator';

class ResetPasswordDto {
  @IsEmail()
  public email: string;
}

export default ResetPasswordDto;
