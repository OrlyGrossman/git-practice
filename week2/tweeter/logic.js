const Tweeter = function() {
    ////////// Array of Post Objects ///////////////////////////
    postsArray = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },

        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

 
    ///////// getting initial number of posts////////////
    let postIdCounter=postsArray.length+1

    //////////////////////////////getting initial number of comments (c)////////////////////////////
    
    const totalComments=function(){
        total=0
        for (i=0; i<postsArray.length; i++){
            total=total+postsArray[i].comments.length
        }
        return total
    }
    
    let commentsCounter=totalComments()
    console.log (commentsCounter)

    //////////////////////////get postsArray function/////////////////////////////////////
    const getPosts=function(){
        return postsArray
    }    

    ////////////////////add post to postArray///////////////////////////////
    const addPost=function(){
        ///create new post
        newId="p"+(postIdCounter)
        postIdCounter=postIdCounter+1
        newPost = {
            text:"",
            id:"",
            comments: []
        }
        newPost.id=newId
        newPost.text=document.getElementById("input").value
        comments=[]
        console.log(newPost)
        postsArray.push(newPost)
        return newPost
    }

    /////////////////////////////////////remove post from post array/////////////////////////
    const removePost=function(myId){
        arraylength=postsArray.length
        let iToSplice
        for (i=0; i<arraylength; i++){
            if (postsArray[i].id==myId){
                iToSplice=i
            }
        }
        postsArray.splice(iToSplice,1)
        console.log(postsArray)
    }

//////////////////////////////////////////////////////add comment/////////////////////////////////////

    const addComment=function(comment,postId){
        for (i=0; i<postsArray.length; i++){
            if (postsArray[i].id==postId){
                commentsCounter=commentsCounter+1
                newCommentId="c"+commentsCounter
                const newComment={ id: newCommentId, text: comment }
                postsArray[i].comments.push(newComment)
            }
        }
    }
 
 //////////////////////////////////remove comment//////////////////////////////////////////////////////////

    const removeComment=function(postId, CommentId){
        // looping through posts
        for (i=0; i<postsArray.length; i++){
            if (postsArray[i].id==postId){
                //looping through comments
                for(j=0; j<postsArray[i].comments.length; j++){
                    if (postsArray[i].comments[j].id==CommentId){
                        postsArray[i].comments.splice(j,1)
                    }
                }
            }
        }
    }

    //////////////////// values and functions return ////////////////////////
    //////////////// its an object that containes all the functions////////////
    return {
        postIdCounter, // the same as postIdCounter: postIdCounter
        totalComments, //the same as totalComments: TotalComments
        getPosts,//the same as getPosts: GetPosts
        addPost,//the same as addPost: addPost 
        removePost,
        addComment,
        removeComment
        
    }

}

// console.log(tweeter.postIdCounter)
// console.log(tweeter.totalComments())
// console.log(postsArray)
//console.log(tweeter.getPosts())
// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}
// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// tweeter.removePost("p1")
// console.log(tweeter.getPosts())

//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2") 
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}crff5