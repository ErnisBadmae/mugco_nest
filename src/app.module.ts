import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ProductModule } from './product/product.module'
import { PrismaService } from './prisma.service'

@Module({
	imports: [AuthModule, ProductModule],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
