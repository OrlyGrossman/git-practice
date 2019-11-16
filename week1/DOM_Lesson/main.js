console.log('hi I am new file')

const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }
 
for(i=0; i<7; i++){
    const newBox=document.createElement("Box")
    newBox.id="coloredBox"+i
    newBox.innerHTML="A"
    newBox.style.backgroundColor=getRandomColor()
    newBox.style.width="15mm"
    newBox.style.height="15mm"
    newBox.style.display="inline-block"
    newBox.style.margin="0.5mm"
    newBox.onmouseover=function mouseOver(){
                          newBox.style.backgroundColor=getRandomColor()
                          }
    console.log(newBox)
    console.log(newBox.onmouseover)
    document.getElementById("container").appendChild(newBox)
}


// function mouseOver() {
//   document.getElementById("container").style.backgroundColor = "red";
// }


// reservation form exercise
// const reservations = {
//     Bob: false ,
//     Ted: true 
//   }
  
//   const nameInput = function(){
//       const firstName=document.getElementById("inputBox").value
//       const newItem=document.createElement("div")
//       console.log(firstName)
//       console.log (reservations[firstName])
//       if (reservations[firstName]==true){
//          console.log("I am inside")
//          newItem.value=firstName
//          console.log(document.getElementById("myOutput"))
//          document.getElementById("myOutput").append("Welcome "+newItem.value+ " Your room is ready")
//       }
//      else {
//          newItem.value=firstName
//          document.getElementById("myOutput").append("Go Away  "+newItem.value+ " You are not welcome")

//      }
              
//   }