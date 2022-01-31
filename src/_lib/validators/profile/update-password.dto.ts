import { IsString } from 'class-validator';

class UpdatePasswordDto {
  @IsString()
  public pass: string;

  @IsString()
  public confirm: string;
}

export default UpdatePasswordDto;
