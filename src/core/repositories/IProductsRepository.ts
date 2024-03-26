import { Product } from '@prisma/client'

type findAllProductsInterface = {
  name?: string
  page: number
}

type findProductsByCategoryInterface = {
  category: string
}

export abstract class IProductRepository {
  abstract findAllProducts(props: findAllProductsInterface): Promise<Product[]>

  abstract findProductById(): Promise<Product>

  abstract findProductsByCategory(
    props: findProductsByCategoryInterface,
  ): Promise<Product[]>
}
