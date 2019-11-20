// const mathOperations = function(){
//     const add = function(x, y){
//         return x + y
//     }
//     return add
// }

// newOperation=mathOperations()
// console.log(newOperation(5,9))

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// closure //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!

// const family = function() {
//    members=[]
//    const birthday=function(name){
//        members.push(name)
//    } 
//    return (birthday)
// }

// const giveBirth=family()
// giveBirth("danny")
// giveBirth("Eyal")
// giveBirth("Aviv")
// console.log(members)

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////modules /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

operations=mathOperations()
sumxy=operations.add(1,2)
divxy=operations.div(6,2)
total=operations.mult(7,operations.div(36,6))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////closure and modules//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('Aviv')
usersModule.addUser('Eitan')
usersModule.listUsers()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////// closure and modules exercise/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const StringFormatter = function(){
 
    const capitalizeFirst = function(myString){
        let lowerstring1=myString.slice(0,1).toUpperCase()
        let lowerstringRest=myString.slice(1).toLowerCase()
        let newstring=lowerstring1+lowerstringRest
        console.log(newstring)

    }

    const skewerCase = function(myString){
        console.log(myString.replace(" ","-"))

    }

    return{
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

let formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box