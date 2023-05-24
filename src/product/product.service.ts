import { Injectable, NotFoundException } from '@nestjs/common'
import { CategoryDto } from 'src/category/category.dto'
import { returnCategoryObject } from 'src/category/return-category.object'
import { PrismaService } from 'src/prisma.service'
import { generateSlug } from 'src/utils/generate-slug'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		if (isNaN(id)) {
			throw new Error(`Invalid id: ${id}`)
		}

		const category = await this.prisma.category.findUnique({
			where: {
				id
			},

			select: returnCategoryObject
		})
		if (!category) {
			throw new NotFoundException('Category not found')
		}
		return category
	}

	async create() {
		return this.prisma.category.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}

	async bySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: {
				slug
			},

			select: returnCategoryObject
		})
		if (!category) {
			throw new NotFoundException('Category not found')
		}
		return category
	}

	async update(id: number, dto: CategoryDto) {
		const category = await this.byId(id)

		if (!category) {
			throw new NotFoundException(`Category with ID ${id} not found.`)
		}

		return this.prisma.category.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.category.delete({
			where: {
				id
			}
		})
	}
}
