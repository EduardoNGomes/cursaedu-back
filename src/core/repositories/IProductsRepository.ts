import { Product } from '@prisma/client'

type findAllProductsInterface = {
  name?: string
  page: number
}

type findProductByIdInterface = {
  id: string
}

type findProductsByCategoryInterface = {
  category: string
  page: number
}

export abstract class IProductRepository {
  abstract findAllProducts(props: findAllProductsInterface): Promise<Product[]>

  abstract findProductById(
    props: findProductByIdInterface,
  ): Promise<Product | null>

  abstract findProductsByCategory(
    props: findProductsByCategoryInterface,
  ): Promise<Product[]>
}
