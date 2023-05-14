import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
	// create(createProductDto: CreateProductDto) {
	// 	return 'This action add a new Product'
	// }

	findAll() {
		return `This action return all products`
	}
}
