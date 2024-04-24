import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @Length(8, 20)
  @IsOptional()
  password?: string;

  @ApiProperty()
  @IsString()
  @Length(8, 20)
  @IsOptional()
  confirmPassword?: string;

  @ApiProperty()
  @IsString()
  @Length(2, 20)
  @IsOptional()
  name?: string;
}
