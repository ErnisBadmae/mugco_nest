import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { OrderModule } from './order/order.module'
import { PaginationModule } from './pagination/pagination.module'
import { PrismaService } from './prisma.service'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module'
import { StatisticModule } from './statistic/statistic.module'
import { UserModule } from './user/user.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		}),
		AuthModule,
		ProductModule,
		ConfigModule.forRoot(),
		UserModule,
		ReviewModule,
		CategoryModule,
		OrderModule,
		StatisticModule,
		PaginationModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
