import { IProductRepository } from '@/core/repositories/IProductsRepository'
import { Product } from '@prisma/client'
import { InvalidCategoryError } from '../errors/InvalidCategoryError'
import { Injectable } from '@nestjs/common'

type FindProductByCategoryUseCaseRequest = {
  category: string
  page: number
}

type FindProductByCategoryUseCaseResponse =
  | {
      totalCount: number
      products: Product[]
    }
  | InvalidCategoryError
@Injectable()
export class FindProductsByCategoryUseCase {
  constructor(private productRepositry: IProductRepository) {}

  async execute({
    category,
    page,
  }: FindProductByCategoryUseCaseRequest): Promise<FindProductByCategoryUseCaseResponse> {
    if (
      category.toLocaleUpperCase() !== 'MUG' &&
      category.toUpperCase() !== 'TSHIRT'
    ) {
      return new InvalidCategoryError(category)
    }

    const { totalCount, products } =
      await this.productRepositry.findProductsByCategory({
        category: category.toUpperCase(),
        page,
      })

    return { totalCount, products }
  }
}
