import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { IProductRepository } from '@/core/repositories/IProductsRepository'
import { PrismaProductRepository } from './prisma/repositories/PrismaProductRepository'

@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: IProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [PrismaService, IProductRepository],
})
export class DatabaseModule {}
