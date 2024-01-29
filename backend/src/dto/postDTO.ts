// import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';
/**
 * CreateUserDto class
 * @class
 */
export class CreatePost {

    datetime!: number;

    @Length(1, 30)
    @IsString()
    name!: string;

    @Length(1, 50)
    @IsString()
    subject!: string;

    @Length(1, 50)
    @IsString()
    comment!: string;

    timestamp!: number

    board!: string


}

// cosnt data = data:{
//     datetime: "1234444",
//     name: 'anon',
//     subject: '',
//     comment: 'mid face',
//     timestamp: 1,
//     board: 'random'
// }