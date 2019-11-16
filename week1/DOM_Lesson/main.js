console.log('hi I am new file')

const reservations = {
    Bob: false ,
    Ted: true 
  }
  
  const nameInput = function(){
      const firstName=document.getElementById("inputBox").value
      const newItem=document.createElement("div")
      console.log(firstName)
      console.log (reservations[firstName])
      if (reservations[firstName]==true){
         console.log("I am inside")
         newItem.value=firstName
         console.log(document.getElementById("myOutput"))
         document.getElementById("myOutput").append("Welcome "+newItem.value+ " Your room is ready")
      }
     else {
         newItem.value=firstName
         document.getElementById("myOutput").append("Go Away  "+newItem.value+ " You are not welcome")

     }
              
  }