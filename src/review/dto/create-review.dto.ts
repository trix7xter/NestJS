import { IsNumber, IsString, isString, Max, Min } from 'class-validator';

export class CreateReviewDto {
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @Max(5)
    @Min(1, { message: "Rating must be between 1 and 5" })
    @IsNumber()
    rating: number;

    @IsString()
    productId: string;
}