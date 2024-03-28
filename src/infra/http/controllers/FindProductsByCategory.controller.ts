import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipe/ZodValidation'
import { FindProductsByCategoryUseCase } from '@/domain/products/application/useCases/FindProductsByCategoryUseCase'
import { InvalidCategoryError } from '@/domain/products/application/errors/InvalidCategoryError'

const findProductsByCategoryParamsSchema = z.object({
  category: z.string().optional(),
})

type FindProductsByCategoryParamsSchema = z.infer<
  typeof findProductsByCategoryParamsSchema
>

const findProductsByCategoryQuerySchema = z.object({
  name: z.string().optional(),
  page: z.coerce.number().optional(),
})

type FindProductsByCategoryQuerySchema = z.infer<
  typeof findProductsByCategoryQuerySchema
>

const paramValidationPipe = new ZodValidationPipe(
  findProductsByCategoryParamsSchema,
)
const queryValidationPipe = new ZodValidationPipe(
  findProductsByCategoryQuerySchema,
)
@Controller('/category/:category')
export class FindProductsByCategoryController {
  constructor(private findProductsByCategory: FindProductsByCategoryUseCase) {}

  @HttpCode(200)
  @Get()
  async handle(
    @Param(paramValidationPipe) param: FindProductsByCategoryParamsSchema,
    @Query(queryValidationPipe) query: FindProductsByCategoryQuerySchema,
  ) {
    const { category } = param

    const { page, name } = query

    const pageInvalid = page === undefined || page === 0

    const result = await this.findProductsByCategory.execute({
      page: pageInvalid ? 1 : page,
      category,
      name,
    })

    if (result instanceof InvalidCategoryError) {
      throw new BadRequestException(result.message)
    }

    return result
  }
}
