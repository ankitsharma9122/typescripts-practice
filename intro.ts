// cmd ==> tsc intro.js
// Types :== Number, string,Boolean,null,undefined,void,object,Array,Tuple,any,never,unknown

// syntax variable declaration string
// let greet : string ="Hello Ankit!";
// console.log(greet);

// both are correct for numbers, string ,boolean
// let userId : number=78388
// let userId =78388
// console.log(userId)


// let isLog : Boolean = true
// let isLog  = true
// console.log(isLog)
// export {}


// Any just a flag to avoid type checking
// like in function ==> you are not sure abt the return type

// function Adding(num1 : number,num2: number = 10) : number{
//     return num1 + num2;
// }
// let ans : number = Adding(4,5);
// // the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//   return a + b + (c || 0);
// }


// rest parameter
// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p, c) => p + c, 0);
// }
// add(12,1,2,4,5,6,7);

// object 
// let name ={
//     name1: "Ankit",
//     roll :12,
//     expert :"c++"
// }
//obj as parameter
// function func({name1 : string,roll : number}) {
// }
// obj as return func
// function func() : {name1 : string,roll : number} {
//    return {name1 :"ankit",roll: 12};
// }


//alias
// type User = {
//     name1 : string;
//     roll : number;
// }
// type Mystring = string // now string will renamed to mystring 
// function func(user : User) {}

// readonly 
// type User = {
//     readonly _id : string;
//     name : string;
//     class : number;
//     isActive ?: boolean;
// }

// let user1 : User ={
//    _id : "1121",
//    name :"Ankit",
//    class : 121,
// }
// user1.name ="Ankit sharma"
// user1._id="8973289" // not applicable bcoz readonly mode


// to extend the type 
// type cardNumber = {
//     cardNumber : number
// }

// type cardName = {
//     cardName : string
// }

// type CompleteCardDetails = cardName & cardNumber & {
//     cvv : number
// }

// let user1 : CompleteCardDetails ={
//     cardName : "1232",
//     cardNumber : 121,
//     cvv :8732989,
// }


// let score : number | string | boolean;
// score=121;
// score="2i993"
// score=true

// let arr : number[] = [1,2,3,5];
// let arr1 : (number | string)[]=[1,"2",3];
// let arr2 : number[] | string[] =[1,2,9] // ya to complete number ya to complete string

//tuple : are a type of array of known length and where the different elements may have different types
// let ourTuple: [number, boolean, string] = [5, false, 'Coding God was here'];
// ourTuple.push('Something new and wrong');
//push operation ho jata hai but direct extend karoge size to nahi hoga

// interface user {
//     name1 : string,
//     class : number,
//     dob : number,
//     getData() : string,
// }

// let user1 : user = {name1 : "Ankit",class :121,dob :121,getData() {
//   return "ankit"  
// },}

// reopening of intrface
// interface user {
//     rank : number,
// }

//inhertance in interface
// interface Admin extends user {
//     role : string ,
// }

// let admin1 : Admin = {name1 : "Ankit",class :121,dob :121,getData() {
//   return "ankit"  
// },role :"admin"}


//public--------->access outside class
//private--------> access to only class
//protected------> if you want to access in inherited class only

// class User {
//     private email : string
//     public name : string 
//     protected totalCourse : number=0
//     // private totalCourse : number=0
//     readonly city : string = "Ranchi"
//     //constructor
//     constructor(name :string, email : string){
//         this.email=email,
//         this.name=name
//     }
//     //getter never have params
//     get getLoggedEmail() : string {
//         return this.email
//     }
//     // setter never return anything 
//     set setSubsCouseTotal(num :number){
//         this.totalCourse=this.totalCourse+num
//     }
// }

// class Admin extends User {
//     role : string
//     get getUserSubsCoursesTotal() : number{
//        return this.totalCourse
//     }
// }

// let UserAnkit = new User("Ankit","iamankitsharma9122@gmail.com");
// let AdminAnkit = new Admin("ankit","myselfAnkit")
// let subsCourse=AdminAnkit.getUserSubsCoursesTotal


// We cannot create an instance of an abstract class.
// Abstract
export {}
