import { Product } from '@prisma/client'
import { IProductRepository } from 'src/core/repositories/IProductsRepository'

type FindAllProductUseCaseRequest = {
  name?: string
  page: number
}

type FindAllProductUseCaseResponse = {
  products: Product[]
}

export class FindAllProductUseCase {
  constructor(private productRepositry: IProductRepository) {}

  async execute({
    page,
    name,
  }: FindAllProductUseCaseRequest): Promise<FindAllProductUseCaseResponse> {
    const products = await this.productRepositry.findAllProducts({ page, name })

    return { products }
  }
}
