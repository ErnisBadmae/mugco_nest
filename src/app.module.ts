import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ProductModule } from './product/product.module'
import { PrismaService } from './prisma.service'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { StatisticModule } from './statistic/statistic.module';

@Module({
	imports: [AuthModule, ProductModule, ConfigModule.forRoot(), UserModule, ReviewModule, CategoryModule, OrderModule, StatisticModule],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
