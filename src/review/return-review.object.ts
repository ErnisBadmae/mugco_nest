import { Prisma } from '@prisma/client'
import { returnUserObj } from 'src/user/return-user.object'

export const returnReviewObject: Prisma.ReviewSelect = {
	id: true,
	createdAt: true,

	text: true,
	rating: true,

	user: {
		select: returnUserObj
	}
}
