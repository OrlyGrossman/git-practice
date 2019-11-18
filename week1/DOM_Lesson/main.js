console.log('hi I am new file')


//input form exercise
const validate= function(){
  console.log("in the function")
  const name=document.getElementById("name").value 
  console.log(name)
  const salary=document.getElementById("salary").value||null
  console.log(salary)
  const birthday=document.getElementById("birthday").value||null
  console.log(birthday)
  const phone=document.getElementById("phone").value||null
  console.log(phone)

  const comments= {
    missingName:"",
    shortName:"",
    salary:"",
    phone:"",
    birthday:""

  }
  if (name==""){
    console.log("please enter your name")
    missingNameComment=document.createElement("div")
    missingNameComment.innerHTML=("please enter your name")
    document.body.appendChild(missingNameComment)
  }
  
  if (name.length<3 && name.length>0){
    console.log("invalid name")
    shortNameComment=document.createElement("div")
    shortNameComment.innerHTML=("Invalid name")
    document.body.appendChild(shortNameComment)
    
  }

  if((salary<10000) || (salary>16000) || (salary==null)){
    console.log("invalid salary")
    salaryComment=document.createElement("div")
    salaryComment.innerHTML=("Invalid salary")
    document.body.appendChild(salaryComment)
    }

  if(phone==null){
    console.log("phone number is missing")
    noPhoneComment=document.createElement("div")
    noPhoneComment.innerHTML=("phone number is missing")
    document.body.appendChild(noPhoneComment)
  }
  else if((phone.length<10)){
    console.log("invalid phone number")
    phoneComment=document.createElement("div")
    phoneComment.innerHTML=("Invalid phone number")
    document.body.appendChild(phoneComment)

  }

  if (birthday==null){
    console.log("birthday should not be null")
    birthdayComment=document.createElement("div")
    birthdayComment.innerHTML=("please enter valid date")
    document.body.appendChild(birthdayComment)
  }

}
// color changing form exercise 
// const getRandomColor = function() {
//     const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     return niceColors[randomPosition];
//   }


// for(i=0; i<7; i++){
//     const newBox=document.createElement("Box")
//     newBox.id="coloredBox"+i
//     newBox.innerHTML="A"
//     newBox.style.backgroundColor=getRandomColor()
//     newBox.style.width="15mm"
//     newBox.style.height="15mm"
//     newBox.style.display="inline-block"
//     newBox.style.margin="0.5mm"
//     newBox.onmouseover=function mouseOver(){
//                           newBox.style.backgroundColor=getRandomColor()
//                           }
//     console.log(newBox)
//     console.log(newBox.onmouseover)
//     document.getElementById("container").appendChild(newBox)
// }


// function mouseOver() {
//   document.getElementById("container").style.backgroundColor = "red";
// }


// reservation form exercise
// const reservations = {
//     Bob: false ,
//     Ted: true 
//   }
  
  // const nameInput = function(){
  //     const firstName=document.getElementById("inputBox").value
  //     const newItem=document.createElement("div")
  //     console.log(firstName)
  //     console.log (reservations[firstName])
  //     if (reservations[firstName]==true){
  //        console.log("I am inside")
  //        newItem.value=firstName
  //        console.log(document.getElementById("myOutput"))
  //        document.getElementById("myOutput").append("Welcome "+newItem.value+ " Your room is ready")
  //     }
  //    else {
  //        newItem.value=firstName
  //        document.getElementById("myOutput").append("Go Away  "+newItem.value+ " You are not welcome")
  //    }
  // }