// import { Authorized, JsonController, Get, Post, HttpCode } from 'routing-controllers';
// import { PostService }  from '../services/postService'

// @JsonController('/post')
// export class exampleController {

//     private postService: PostService;

//     constructor(){
//         this.postService = new PostService
//     }

//     @Get('/getall')
//     publicExample(){
//         console.log('hit this end point')
//         const tester = this.postService.getAllPosts()
//         console.log(tester)
//         return tester
//     }

//     @HttpCode(200)
//     @Post(`/newpost`)
//     async testCreate(){
//         console.log('Going to make an entry into table')
//         const newpost = this.postService.createNewPost()
//         return newpost
//     }

// }