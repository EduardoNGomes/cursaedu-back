import { UseCaseError } from '@/core/error/IUseCaseError'

export class InvalidCategoryError extends Error implements UseCaseError {
  constructor(category: string) {
    super(`Category: ${category} is invalid. Only "mug" or "tshirt" are valid`)
  }
}
