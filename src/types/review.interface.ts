import { IProduct } from './product.interface'

export interface IReview {
	id: number
	product: IProduct
	text: string
	rating: number
}
