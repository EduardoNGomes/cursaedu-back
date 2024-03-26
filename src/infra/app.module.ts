import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { HttpModule } from './http/http.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
      serveStaticOptions: {
        index: false,
      },
    }),
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
