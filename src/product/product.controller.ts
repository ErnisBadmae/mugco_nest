import { Controller, Get, Post } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post()
	// create(@Body() createProductDto: CreateProductDto) {
	//   return this.productService.create(createProductDto)
	// }
	@Get()
	findAll() {
		return this.productService.findAll()
	}
}
