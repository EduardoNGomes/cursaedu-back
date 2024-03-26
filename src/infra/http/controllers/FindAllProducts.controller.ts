import { FindAllProductUseCase } from '@/domain/products/application/useCases/FindAllProductsUseCase'
import { Controller, Get, HttpCode, Query, UsePipes } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipe/ZodValidation'

const findAllProductsParamsSchema = z.object({
  name: z.string().optional(),
  page: z.coerce.number().optional(),
})

type FindAllProductsParamsSchema = z.infer<typeof findAllProductsParamsSchema>

@Controller('/products')
export class FindAllProductsController {
  constructor(private findAllProducts: FindAllProductUseCase) {}

  @HttpCode(200)
  @Get()
  @UsePipes(new ZodValidationPipe(findAllProductsParamsSchema))
  async handle(@Query() query: FindAllProductsParamsSchema) {
    const { page, name } = query

    const result = await this.findAllProducts.execute({ page: page ?? 1, name })

    return result
  }
}
