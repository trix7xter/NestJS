import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product-dto';

@Controller('product')
export class ProductController {

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {
        return 'This action adds a new product';
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return 'This action returns a #${id} product';
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return 'This action removes a #${id} product';
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: ProductModel) {
        return 'This action updates a #${id} product';
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDto) {

    }
}
