const playingField = document.getElementById("playing-field")
console.log(playingField)
playingField.style.backgroundColor = "blue"

const moveRight = function(){
    const ball=document.getElementById("block")
    console.log(ball)
    ball.style.backgroundColor = "yellow"
    let myball=ball.style.left//initial position
    console.log(myball)
    let position=parseInt(myball)||0
    console.log(position)
    position+=100
    ball.style.left=position+"px"
  }

const moveLeft = function(){
    const ball=document.getElementById("block")
    console.log(ball)
    ball.style.backgroundColor = "yellow"
    let myball=ball.style.left//initial position
    console.log(myball)
   
    let position=parseInt(myball)||0
    position-=100
    ball.style.left=position+"px"
  }

 const moveUp = function(){
    const ball=document.getElementById("block")
    console.log(ball)
    ball.style.backgroundColor = "yellow"
    let myball=ball.style.top//initial position
    console.log(myball)
    let position=parseInt(myball)||0
    console.log(position)
    position-=100
    console.log(position)
    ball.style.top=position+"px"
  }

  const moveDown = function(){
    const ball=document.getElementById("block")
    console.log(ball)
    ball.style.backgroundColor = "yellow"
    let myball=ball.style.top//initial position
    console.log(myball)
    let position=parseInt(myball)||0
    console.log(position)
    position+=100
    ball.style.top=position+"px"
  }

   const header = document.createElement("h1")
   header.setAttribute("class", "my-header")
   header.innerHTML = "The Best Game Ever"
   document.body.appendChild(header)


const header2 = document.createElement("h2")
header2.setAttribute("class", "my-header2")
header2.innerHTML = "A game by Orly Grossman"
document.body.appendChild(header2)

const ballChangeColor = function(){
  ball=document.getElementById("block")
  ball.style.backgroundColor="#8e44ad"

}

  
    
