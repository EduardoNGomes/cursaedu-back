import { Product } from "@prisma/client";

type findAllProductInterface = {
  name?:string
  page: number
}

type findProductByCategoryInterface = {
  category: string
}

export abstract class IProductRepository {
  abstract findAll(props:findAllProductInterface):Promise<Product[]>

  abstract findProductById():Promise<Product>

  abstract findProductByCategory(props:findProductByCategoryInterface):Promise<Product[]>

}