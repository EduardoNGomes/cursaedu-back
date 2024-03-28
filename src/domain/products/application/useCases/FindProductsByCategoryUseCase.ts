import { IProductRepository } from '@/core/repositories/IProductsRepository'
import { Product } from '@prisma/client'
import { InvalidCategoryError } from '../errors/InvalidCategoryError'
import { Injectable } from '@nestjs/common'

type FindProductByCategoryUseCaseRequest = {
  category: string
  page: number
  name?: string
}

type FindProductByCategoryUseCaseResponse =
  | {
      totalCount: number
      products: Product[]
    }
  | InvalidCategoryError
@Injectable()
export class FindProductsByCategoryUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({
    category,
    page,
    name,
  }: FindProductByCategoryUseCaseRequest): Promise<FindProductByCategoryUseCaseResponse> {
    if (
      category.toLocaleUpperCase() !== 'MUG' &&
      category.toUpperCase() !== 'TSHIRT'
    ) {
      return new InvalidCategoryError(category)
    }

    const { totalCount, products } =
      await this.productRepository.findProductsByCategory({
        category: category.toUpperCase(),
        page,
        name,
      })

    return { totalCount, products }
  }
}
