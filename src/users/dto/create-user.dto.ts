import {
  IsNotEmpty,
  IsUrl,
  IsString,
  MinLength,
  IsPhoneNumber,
  IsEnum,
  MaxLength,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsNumber, ArrayNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../types';
import validationOptions from '../../common/constants/validation-options';


export class CreateUserDto {
  // @IsString()
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @MinLength(validationOptions.limits.userName.min, {
  //   message: validationOptions.messages.tooShort,
  // })
  // @MaxLength(validationOptions.limits.userName.max, {
  //   message: validationOptions.messages.tooLong,
  // })
  // @ApiProperty({ example: 'Георгий' })
  // fullname: string;

  // @IsEnum(UserRole, {
  //   message: validationOptions.messages.strictValues + Object.values(UserRole).join(', '),
  // })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @ApiProperty({ example: 'recipient' })
  // @IsString()
  // role: UserRole;

  // @IsUrl({ require_protocol: true }, { message: validationOptions.messages.incorrectUrl })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @ApiProperty({ example: 'https://vk.com/gosha-recipient' })
  // @IsString()
  // vk: string;

  // @IsUrl({ require_protocol: true }, { message: validationOptions.messages.incorrectUrl })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @ApiProperty({
  //   example:
  //     'https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-image-88e86878-e1f3-4876-8597-91e4d4bd44fc&mb=webpulse',
  // })
  // @IsString()
  // avatar: string;

  // @IsPhoneNumber('RU', { message: validationOptions.messages.incorrectPhoneNumber })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @ApiProperty({ example: '89213322232' })
  // @IsString()
  // phone: string;

  // @IsString({ message: validationOptions.messages.shouldBeString })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @MinLength(validationOptions.limits.address.min, { message: validationOptions.messages.tooShort })
  // @MaxLength(validationOptions.limits.address.max, { message: validationOptions.messages.tooLong })
  // @ApiProperty({ example: 'Спб, Невский, 100' })
  // @IsString()
  // address: string;

  // @IsArray()
  // @IsNumber({}, { each: true, message: validationOptions.messages.incorrectCoordinates })
  // @ArrayMinSize(2, { message: validationOptions.messages.incorrectCoordinates })
  // @ArrayMaxSize(2, { message: validationOptions.messages.incorrectCoordinates })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @ApiProperty({ example: [59.932031, 30.355628] })
  // coordinates: number[];

  // только для тестирования!!!
  // @IsString({ message: validationOptions.messages.shouldBeString })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @MinLength(validationOptions.limits.login.min, {
  //   message: validationOptions.messages.tooShort,
  // })
  // @MaxLength(validationOptions.limits.login.max, {
  //   message: validationOptions.messages.tooLong,
  // })
  // @ApiProperty({ example: 'gosha' })
  // @IsString()
  // login: string;

  // @IsString({ message: validationOptions.messages.shouldBeString })
  // @IsNotEmpty({ message: validationOptions.messages.isEmpty })
  // @ApiProperty({ example: 'gosha123' })
  // @IsString()
  // password: string;

  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  role: UserRole;

  @IsNotEmpty()
  @IsUrl()
  vk: string;

  @IsNotEmpty()
  @IsUrl()
  avatar: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(2)
  coordinates: number[];

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

