import { IProductRepository } from '@/core/repositories/IProductsRepository'
import { Product } from '@prisma/client'
import { InvalidCategoryError } from '../errors/InvalidCategoryError'

type FindProductByCategoryUseCaseRequest = {
  category: string
  page: number
}

type FindProductByCategoryUseCaseResponse =
  | {
      products: Product[]
    }
  | InvalidCategoryError

export class FindProductByCategoryUseCase {
  constructor(private productRepositry: IProductRepository) {}

  async execute({
    category,
    page,
  }: FindProductByCategoryUseCaseRequest): Promise<FindProductByCategoryUseCaseResponse> {
    if (category !== 'MUG' && category !== 'TSHIRT') {
      return new InvalidCategoryError(category)
    }

    const products = await this.productRepositry.findProductsByCategory({
      category,
      page,
    })

    return { products }
  }
}
