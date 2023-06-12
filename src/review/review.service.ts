import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from 'src/prisma.service'
import { returnReviewObject } from './return-review.object'
import { ReviewDto } from './review.dto'
import { ProductService } from 'src/product/product.service'

@Injectable()
export class ReviewService {
	private productService: ProductService
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.review.findMany({
			select: returnReviewObject
		})
	}

	async create(userId: number, dto: ReviewDto, productId: number) {
		const isProduct = await this.productService.byId(productId)

		return this.prisma.review.create({
			data: {
				...dto,
				product: {
					connect: {
						id: productId
					}
				},
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
	}

	async getAverageValueByProductId(productId: number) {
		return this.prisma.review
			.aggregate({
				where: {
					productId
				},
				_avg: {
					rating: true
				}
			})
			.then(data => data._avg)
	}
}
