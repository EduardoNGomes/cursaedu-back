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

    const { page } = query

    console.log(page)

    const result = await this.findProductsByCategory.execute({
      page: page ?? 1,
      category,
    })

    if (result instanceof InvalidCategoryError) {
      throw new BadRequestException(result.message)
    }

    return result
  }
}
