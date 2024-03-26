import { Product } from '@prisma/client'
import { IProductRepository } from 'src/core/repositories/IProductsRepository'
import { ProductNotFoundError } from '../errors/ProductNotFoundError'

type FindProductByIdUseCaseRequest = {
  id: string
}

type FindProductByIdUseCaseResponse =
  | {
      product: Product
    }
  | ProductNotFoundError

export class FindProductByIdUseCase {
  constructor(private productRepositry: IProductRepository) {}

  async execute({
    id,
  }: FindProductByIdUseCaseRequest): Promise<FindProductByIdUseCaseResponse> {
    const product = await this.productRepositry.findProductById({ id })

    if (!product) return new ProductNotFoundError()

    return { product }
  }
}
