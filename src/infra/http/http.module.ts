import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { FindAllProductUseCase } from '@/domain/products/application/useCases/FindAllProductsUseCase'
import { FindProductByIdUseCase } from '@/domain/products/application/useCases/FindProductById'
import { FindProductByCategoryUseCase } from '@/domain/products/application/useCases/FindProductsByCategoryUseCase'
import { FindAllProductsController } from './controllers/FindAllProducts.controller'

@Module({
  imports: [DatabaseModule],
  providers: [
    FindAllProductUseCase,
    FindProductByIdUseCase,
    FindProductByCategoryUseCase,
  ],
  controllers: [FindAllProductsController],
})
export class HttpModule {}
