import { UseCaseError } from 'src/core/error/UseCaseError'

export class ProductNotFoundError extends Error implements UseCaseError {
  constructor() {
    super(`Product not found`)
  }
}
