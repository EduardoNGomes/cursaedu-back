import { IProductRepository } from '@/core/repositories/IProductsRepository'
import { Injectable } from '@nestjs/common'
import { Category, Product } from '@prisma/client'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaProductRepository implements IProductRepository {
  constructor(private prisma: PrismaService) {}
  async findAllProducts(props: {
    name?: string
    page: number
  }): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        name: {
          contains: props.name,
        },
      },
      take: 12,
      skip: (props.page - 1) * 12,
    })

    return products
  }

  async findProductById(props: { id: string }): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: props.id,
      },
    })

    return product
  }

  async findProductsByCategory(props: {
    category: string
    page: number
  }): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        category: props.category as Category,
      },
      take: 12,
      skip: (props.page - 1) * 12,
    })

    return products
  }
}
