import { UseCaseError } from '@/core/error/IUseCaseError'

export class ProductNotFoundError extends Error implements UseCaseError {
  constructor() {
    super(`Product not found`)
  }
}
