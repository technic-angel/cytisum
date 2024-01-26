import { PrismaClient } from '@prisma/client';
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from 'routing-controllers';


export class PostService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewPost(): Promise<any>{
        try{
            const newPost = await this.prisma.post.create({
                data:{
                    datetime: "1234444",
                    name: 'anon',
                    subject: '',
                    comment: 'mid face',
                    timestamp: 1,
                    board: 'random'
                }
            })
            console.log(newPost)
            console.log('here')
        }catch(error){
            throw new BadRequestError(`Error ${error}`);
        }
        

    }

    async getAllPosts(): Promise<any> {
        const testQuery = await this.prisma.post.findMany();
        console.log(testQuery);
        return testQuery;
    }
}