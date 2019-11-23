const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
const post=function(){
    tweeter.addPost()
    renderer.renderPosts(tweeter.getPosts())
}
