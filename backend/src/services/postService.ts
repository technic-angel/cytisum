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

    async createNewPost(post: any): Promise<any>{
        //time stamp is too small

        try{
            const newPost = await this.prisma.post.create({
                data:{
                    datetime: Date.now().toString(),
                    name: post.name !== "" ? post.name : "Anonymous",
                    subject: post.subject !== "" ? post.subject : null,
                    comment: post.comment,
                    timestamp: Math.floor(Date.now() / 1000),
                    board: 'random'
                }
            })
            return newPost
        }catch(error){
            console.log(error)
            throw new BadRequestError(`Error ${error}`);
        }
        

    }

    async getPostById(id: number): Promise<any>{
        try{
            const post = await this.prisma.post.findUnique({
                where: {
                    number: id
                }
            })
            console.log(post)
            return post ? post : {}
            }
        catch(error){
            throw new BadRequestError(`Error ${error}`);
        }
    }

    async getAllPosts(): Promise<any> {
        const testQuery = await this.prisma.post.findMany();
        console.log(testQuery);
        return testQuery;
    }
}