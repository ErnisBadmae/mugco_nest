import { IsString } from 'class-validator'

export class RefreshTokenDto {
	// @IsOptional
	@IsString()
	refreshToken: string
}
