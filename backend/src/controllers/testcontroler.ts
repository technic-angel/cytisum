import { Authorized, JsonController, Get } from 'routing-controllers';
import { PostService }  from '../services/postService'

@JsonController('/post')
export class exampleController {

    private postService: PostService;

    constructor(){
        this.postService = new PostService
    }

    @Get('/getall')
    publicExample(){
        console.log('hit this end point')
        const tester = this.postService.getAllPosts()
        console.log(tester)
        return tester
    }

    @Get(`/newpost`)
    testCreate(){
        console.log('Going to make an entry into table')
        this.postService.createNewPost()
    }

}