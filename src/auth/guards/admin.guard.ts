import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable
} from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class OnlyUserGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<{ user: User }>()

		const user = request.user
		if (!user.isAdmin)
			throw new ForbiddenException("You don't have permission to do this!")

		return user.isAdmin
	}
}
