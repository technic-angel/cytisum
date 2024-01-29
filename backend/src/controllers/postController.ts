import { Authorized, JsonController, Get, Post, HttpCode, Param, Body } from 'routing-controllers';
import { PostService }  from '../services/postService'
import { CreatePost } from '../dto/postDTO'


@JsonController('/post')
export class PostController{
    private postService: PostService;

    constructor(){
        this.postService = new PostService
    }

    @HttpCode(200)
    @Get(`/getallpost`)
    public getPost(){
        //gets all posts in the current tabel
        const query = this.postService.getAllPosts();
        return query;
    }

    @HttpCode(200)
    @Get("/:id")
    public getPostById(@Param('id') id: number){
        const query = this.postService.getPostById(id)
        console.log(query)
        return query
    }

    @Post(`/newpost`)
    public newPost(@Body() data: any){
        //sample application/json data
        // {
        //     "name": "anon",
        //     "subject": "",
        //     "comment": "mid face",
        //     "board": "random"
        //     }
        const res = this.postService.createNewPost(data)
        console.log('here on new post')
        console.log(data)

        return res
    }
}