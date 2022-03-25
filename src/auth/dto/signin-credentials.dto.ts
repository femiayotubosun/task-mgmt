import { IsString } from 'class-validator';

export class SigninCredentialsDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
