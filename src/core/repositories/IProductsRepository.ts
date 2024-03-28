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
  name?: string
  page: number
}

type findAllProductsAndFindProductsByCategoryResponse = {
  totalCount: number
  products: Product[]
}

export abstract class IProductRepository {
  abstract findAllProducts(
    props: findAllProductsInterface,
  ): Promise<findAllProductsAndFindProductsByCategoryResponse>

  abstract findProductById(
    props: findProductByIdInterface,
  ): Promise<Product | null>

  abstract findProductsByCategory(
    props: findProductsByCategoryInterface,
  ): Promise<findAllProductsAndFindProductsByCategoryResponse>
}
