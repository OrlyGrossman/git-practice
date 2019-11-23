const Renderer=function(){

    const renderPosts=function(posts){
        $("div.post").remove();
        console.log(posts)
        arrayLength=posts.length
        for (let i=0; i<arrayLength; i++){
            newPost=document.createElement("div")
            newPost.setAttribute("class","post")
            newPost.innerHTML=posts[i].text + " " + posts[i].id
            console.log(newPost)
            document.body.appendChild(newPost)
        }

    }
    
    return {renderPosts}
}