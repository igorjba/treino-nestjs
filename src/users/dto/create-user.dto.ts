import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe um nome válido' })
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(4, { message: 'O nome deve ter no mínimo 4 caracteres' })
  @MaxLength(20, { message: 'O nome deve ter no máximo 20 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Informe um email válido' })
  @IsEmail({}, { message: 'O email deve ser válido' })
  email: string;

  @IsNotEmpty({ message: 'Informe uma senha válida' })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;
}
