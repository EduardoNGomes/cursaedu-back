import { IProductRepository } from '@/core/repositories/IProductsRepository'
import { Injectable } from '@nestjs/common'
import { Product } from '@prisma/client'

type FindAllProductUseCaseRequest = {
  name?: string
  page: number
}

type FindAllProductUseCaseResponse = {
  totalCount: number
  products: Product[]
}

@Injectable()
export class FindAllProductUseCase {
  constructor(private productRepositry: IProductRepository) {}

  async execute({
    page,
    name,
  }: FindAllProductUseCaseRequest): Promise<FindAllProductUseCaseResponse> {
    const { totalCount, products } =
      await this.productRepositry.findAllProducts({ page, name })

    return { totalCount, products }
  }
}
