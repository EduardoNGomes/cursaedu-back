import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { FindAllProductUseCase } from '@/domain/products/application/useCases/FindAllProductsUseCase'
import { FindProductByIdUseCase } from '@/domain/products/application/useCases/FindProductById'
import { FindProductsByCategoryUseCase } from '@/domain/products/application/useCases/FindProductsByCategoryUseCase'
import { FindAllProductsController } from './controllers/FindAllProducts.controller'
import { FindProductByIdController } from './controllers/FindProductById.controller'
import { FindProductsByCategoryController } from './controllers/FindProductsByCategory.controller'

@Module({
  imports: [DatabaseModule],
  providers: [
    FindAllProductUseCase,
    FindProductByIdUseCase,
    FindProductsByCategoryUseCase,
  ],
  controllers: [
    FindAllProductsController,
    FindProductByIdController,
    FindProductsByCategoryController,
  ],
})
export class HttpModule {}
