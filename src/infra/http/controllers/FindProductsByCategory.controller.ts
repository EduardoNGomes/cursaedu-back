import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Query,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipe/ZodValidation'
import { FindProductsByCategoryUseCase } from '@/domain/products/application/useCases/FindProductsByCategoryUseCase'
import { InvalidCategoryError } from '@/domain/products/application/errors/InvalidCategoryError'

const findProductsByCategoryParamsSchema = z.object({
  category: z.string().optional(),
  page: z.coerce.number().optional(),
})

type FindProductsByCategoryParamsSchema = z.infer<
  typeof findProductsByCategoryParamsSchema
>

@Controller('/category')
export class FindProductsByCategoryController {
  constructor(private findProductsByCategory: FindProductsByCategoryUseCase) {}

  @HttpCode(200)
  @Get()
  @UsePipes(new ZodValidationPipe(findProductsByCategoryParamsSchema))
  async handle(@Query() query: FindProductsByCategoryParamsSchema) {
    const { page, category } = query

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
