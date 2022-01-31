import { IsString } from 'class-validator';

class UpdateProfileDto {
  @IsString()
  public user: string;

  @IsString()
  public pass: string;
}

export default UpdateProfileDto;
