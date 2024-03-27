import {
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipe/ZodValidation'
import { FindProductByIdUseCase } from '@/domain/products/application/useCases/FindProductById'
import { ProductNotFoundError } from '@/domain/products/application/errors/ProductNotFoundError'

const findProductByIdParamsSchema = z.object({
  id: z.string().uuid(),
})

type FindProductByIdParamsSchema = z.infer<typeof findProductByIdParamsSchema>

@Controller('/product/:id')
export class FindProductByIdController {
  constructor(private findProductById: FindProductByIdUseCase) {}

  @HttpCode(200)
  @Get()
  @UsePipes(new ZodValidationPipe(findProductByIdParamsSchema))
  async handle(@Param() param: FindProductByIdParamsSchema) {
    const { id } = param

    const result = await this.findProductById.execute({ id })

    if (result instanceof ProductNotFoundError) {
      throw new NotFoundException(result.message)
    }

    return result
  }
}
