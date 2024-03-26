import { OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  onModuleInit() {
    return this.$connect()
  }

  onModuleDestroy() {
    return this.$disconnect()
  }
}
