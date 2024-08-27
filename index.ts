//! =========================================== Typescript Starts =================================================

//? Type annotation

//? string
// let username:string = `prajwal`
// console.log(username)

//?number
// let age: number = 24;
// console.log(age)

//? boolean
// let isDeveloper: boolean = true;
// console.log(isDeveloper)

//? array

// let skills: string[] = ["html", "css", "javascript", "typescript"]
// skills.push("reactjs")
// skills.push("10")
// console.log(skills)

// let numb: number[] = [10, 20, 30, 40, 50]
// numb.push(60)
// console.log(numb);

// let boolValue: boolean[] = [true, false]
// console.log(boolValue)

//? objects

// let user: {
//     username: string;
//     age: number;
//     isDeveloper: boolean;
//     company:string
// }
// user={
//     username: "kunal",
//     age: 26,
//     isDeveloper: false,
//     company:"tsc"
// }

// console.log(user)

//! Type Inference


//? string
// let username = "prajwal";
// // username = true
// console.log(username)

//? number

// let age = 25;
// age="25years"
// console.log(age);

//? boolean

// let boolValue = true
// boolValue=false
// console.log(boolValue);

//? array
// let arr = [10, 20, 30, 40];
// console.log(arr)

//! Primitivi Datatypes

//? 1.String

//?literal way

// let str1 = "hello world"
// console.log(str1)

// let str2 = 'welcome to typescript class'
// console.log(str2)

// let str3 = `good afternoon class`
// console.log(str3)

// //? functional way

// let str4 = String("how are you all?")
// console.log(str4);
// console.log(typeof str4)



//? 2.Number data type

// let num1 = 50;
// console.log(num1)       //? literal way

// let num2 = 50.25
// console.log(num2)       //? literal way

// let num3 = Number(10);
// console.log(num3)           //? functional way
// console.log(typeof num1)

//? 3.Boolean

// let boolValue1 = true;
// console.log(boolValue1)     //? literal way

// let boolValue2 = false;
// console.log(boolValue2)     //? literal way

// let boolValue3 = Boolean(true);
// console.log(boolValue3)         //? functional way

// console.log(typeof boolValue3)

//? null

// let isNull = null;
// console.log(typeof isNull)

// if (isNull === null) {
//     console.log("it is a null")
// } else {
//     console.log("it is not a null")
// }

//? undefined

// let isUndefined = undefined;
// console.log(isUndefined)
// console.log(typeof undefined)


//! Object Reference Datatypes

//? objects
// let user = {
//     // object properties
//     //object property are like key value pair
//     // LHS is key and RHS is value
// }

//? type annotation with objects

// let userAnnotation: {
//     username: string;
//     age: number;
//     salary: number;
//     isDeveloper: boolean;
//     address:string
// } = {
//     username: "yashwanth",
//     age: 25,
//     salary: 65000,
//     isDeveloper: true,
//     address:"bangalore"
// }

// console.log(userAnnotation)

//? type inference with objects

// let userInference = {
//     username: "yashwanth",
//     age: 25,
//     isDeveloper: true,
//     city:"channapatna"
// }
// console.log(userInference)

//! function with objects with returning objects
// let empName=(user:{firstName:string,lastName:string}):object=>{
//     return user
// }
// let result=empName({firstName:"prajwal",lastName:"shekar"})
// console.log(result);



// =========================================================
// let eName=(user:{fName:string,lName:string,age:number}):{
//     fName:string,lName:string,age:number
// }=>{
//     return user
// }
// let res=eName({fName:"prajwal",lName:"shekar",age:25})
// console.log(res);

//! functions

// function with objects

// optional property in typescript denoted by ?

// function PrintName(obj:{firstname:string,lastname?:string}):object{
//     return obj
// }
// let user1=PrintName({firstname:"shashi",lastname:"kunal"})
// console.log(user1);         //? { firstname: 'shashi', lastname: 'kunal' }

// let user2=PrintName({firstname:"darshan"})
// console.log(user2);         //? { firstname: 'darshan' }


// type USer={
//     firstName:string,
//     lastName:string
// }

//? optional property in objects
// function demo(obj:{firstName:string,lastName?:string}) {
//     return obj
// }

// let user = demo({ firstName: "prajwal"});
// console.log(user)


// let fun = (firstName:string,age:number) => {
//     return ` My name is ${firstName} and iam ${age} years old `
// }

// let result = fun("Prajwal", 25);
// console.log(result)

//? Array

// let languages = ["java", "python", "nodejs", "expressjs"]
// console.log(languages)

// let skills: string[] = ["html", "css", "js", "ts","reactjs"];
// console.log(skills)
// skills.push("10")

// console.log(skills)

// let numbertypes: number[] = [10, 20.30, 410, 521];
// console.log(numbertypes)

// let arr: Array<string> = ["abc", "king", "queen"]
// console.log(arr)


// let arr: Array<[string]> = [["html"], ["css"], ["javascript"]]
// console.log(arr)

//? empty array
// let emptyArr: Array<[]> = [[], []]
// console.log(emptyArr)

//! TUPLE

// let skill = ["java", "python", "typescript"]
// console.log(skill)                                      // normal

// let userInfo: [string, number, boolean] = ["prajwal",25,false]
// console.log(userInfo)


// let EmployeeInfo: [number, string] = [100,"true"];
// console.log(EmployeeInfo)

//  let user : {
//     username: string;
//     age: number;
//     isPaid: boolean;
//     userDetails: [number, string, boolean];
//  }
//  user= {
//     username: "prajwal",
//     age: 22,
//     isPaid: true,
//     userDetails:[10,"bangalore",false]
// }

// console.log(user)

//? while declaring we can use ";" or ","
//? it is not a key value pair

// let EmpDetails: {
//     name: string;
//     exp: number;
//     skills: [string, string, string];
// } = {
//     name: "kishore",
//     exp: 15,
//     skills:["java","python","typescript"]
// }
// console.log(EmpDetails)

// let arr:[string,number,boolean]=["hello all",256,true]
// console.log(arr)

// arr.push(123);
// arr.push("good evening");
// arr.push(false)
// console.log(arr)


//! type union

// let username: string | number|boolean = "prajwal"
// console.log(username)

// username = 101;
// console.log(username)

// username = true
// console.log(username)


//! type alias

// type USER = {
//     fName: string;
//     lName: string;
//     age: number;
//     isDeveloper: boolean;
// }
// let Emp1: USER={
//     fName:"pavan",
//     lName: "kumar",
//     age: 26,
//     isDeveloper:true
// }
// console.log(Emp1)

// let Emp2: USER={disp
//     fName: "raju",
//     lName: "sanju",
//     age: 23,
//     isDeveloper:false
// }
// console.log(Emp2)


// type username = string;
// type password = string;
// type phNumber = number;
// type isDeveloper = boolean;

// function User1(
//     username: username,
//     password: password,
//     phNumber: phNumber,
//     isDeveloper:isDeveloper,
// ) {
//     return {
//         username,password,phNumber,isDeveloper
//     }
// }

// let res = User1("prajwal", "1234", 987454632, true)
// console.log(res)


//! type union using alias

// type USER = string | number | boolean
// let value: USER = "hello"
// console.log(value)

// value = 123;
// console.log(value)

// value = true
// console.log(value)


//! tagged union

// type LoadingState = {
//     state:"loading"
// }
// type FailedState = {
//     state: "failed",
//     status:number
// }
// type SuccessState = {
//     state: "success",
//     response: {
//         isLoaded:boolean
//     }
// }

// type STATE = LoadingState | FailedState | SuccessState;

// function Whatsapp(args: STATE) {
//     switch (args.state) {
//         case "loading":
//             return "Uploading the file"
//         case "failed":
//             return `Something went wrong the error code is ${args.status}`
//         case "success":
//             return `Data sent successfull ${args.response.isLoaded}`
//     }
// }
// // let result = Whatsapp({ state: "loading" })
// // let result=Whatsapp({state:"failed",status:201})
// let result=Whatsapp({state:"success",response:{isLoaded:true}})
// console.log(result)


//! union narrowing

// let addition = (x:string|number,y:string|number)=> {
//     if (typeof x === "string" || typeof y === "string") {
//         return "Strings cannot be added"
//     }else{
//         return x+y
//     }
// }
// console.log(addition(10, "20"));


// let choices: [string, string] = ["NO", "YES"]
// let data = (ans: number | boolean) => {
//     if (typeof ans === "number") {
//         console.log(choices[ans])
//     } else if(typeof ans === "boolean"){
//         if (ans) {
//             console.log(choices[1])
//         } else {
//             console.log(choices[0])
//         }
//     }
// }
// data(true);
// data(false);
// data(1);
// data(0);
// data(10)


//! intersection

// type x = {
//     username:string
// }
// type y = {
//     password:number
// }
// type z = {
//     isAvailabel:boolean
// }
// type data = x & y &z
// let res: data = {
//     username: "kiran",
//     password: 1234,
//     isAvailabel:false,
// }
// console.log(res)

// //? union
// type a = {
//     username: string
// }
// type b = {
//     password: number
// }
// type c = {
//     isAvailabel: boolean
// }
// type userData = x | y | z
// let result: userData = {
//     username: "kiran",
//     password: 1234,
//     // isAvailabel:false,
// }
// console.log(result)



//! ENUMS

// enum Browser{
//     Chrome=101,
//     Safari="10",
//     Firefox=11,
//     Edge=10,
// }

// console.log(Browser);

// ?numeric enums

// enum Browser {
//     Chrome=101,
//     Safari,
//     Firefox,
//     Edge,
// }

//? string enums
// enum States{
//     Karnataka="KA",
//     TamilNadu="TN",
//     Andra = "AP",
//     Kerala="KL"
// }

//? heterogenous enums
// enum Browser {
//     Chrome,
//     Safari,
//     Firefox,
//     Edge="this is a edge",
// }
// console.log(Browser)


//! Special type
//? any:
// let value: any = 10;
// console.log(value)

// value = "good evening"
// console.log(value)

// value = true;
// console.log(value)

// value = function () { }
// console.log(value)

// value = ["10", "20", "30"];
// console.log(value)

// value = { name: "prajwal" };
// console.log(value)

//? if  it is any type in typescript is not providing any security or safe type
// let x;
// x=10
// x="shashi"
// x=undefined
// x=null
// x=true
// x=function(){}
// x=["sashi"]
// x={name:"sashi"}
// x=Symbol(10)



// function Demo(a:number,b:number):any{
//     if(typeof a==="number"|| typeof b==="number"){
//         return a+b
//     }
//     else{
//         return "its not a number"
//     }
// }
// let res=Demo(2,2)
// console.log(res);
//! Type Asseration

// let value: any = "prajwal"
// console.log(value.length)
// let StringData = <string>value;

// console.log(StringData.length)


// let value: any = "shashi"
// let stringData = (value as string);
// console.log(stringData.toUpperCase())

// let num1: any = 10.52332;
// // let numData = <number>num1;
// let numData = (num1 as number);
// console.log(numData.toFixed(3));


// let h1 = document.getElementsByClassName("heading1")[0] as HTMLHeadElement;
// console.log(h1);

// let paratag = document.getElementById("para1") as HTMLParagraphElement;
// console.log(paratag)


//! Literal Types
// function GenerateId(id: "QSP-") {
//     return id+Math.round(Math.random()*100)
// }

// let res = GenerateId("QSP-")
// console.log(res)

//? numeric literal
// let num: 10 = 10
// num = 10;
// console.log(num)

//? string literal
// let str: "hello" = "hello";
// console.log(str)

// str="hiii"

//? function literal and object literal
// type TEXT = {
//     str: string;
//     alignment: "left" | "center" | "right";
// }
// function PrintText(str: TEXT) {
//     return str;
// }
// let result = PrintText({ str: "Good Evening people I hope you all are enjoying the typescript classs", alignment: "center" })
// console.log(result)


//! Interface

//? syntax if interface

// interface interface-name{
// properties,
// methods
// }

//? example 1
// interface User{
//     username: string,
//     password: number,
//     role:string
// }

// let person: User = {
//     username: "prajwal",
//     password: 1234,
//     role:"admin"
// }
// console.log(person)

//? Example 2

// interface userDetails{
//     name: string,
//     age: number,
//     details: Function,
// }

// let user1: userDetails = {
//     name: "abhi",
//     age: 23,
//     details: function () {
//         console.log(`My name is ${this.name} and iam ${this.age} years old`)
//     }
// }
// console.log(user1)
// user1.details()

//? example 3 with readonly property

// interface Person{
//     readonly name: string,
//     readonly panCard:string,
// }

// let user: Person = {
//     name: "Vamshi",
//     panCard: "CVHPV10C20"
// }

// console.log(user)

// user.name="abhi"         //?Cannot assign to 'name' because it is a read-only property.
// user.panCard="PRAJ1012F"  //? Cannot assign to 'panCard' because it is a read-only property


//? example 4--> interface with optional property

// interface Person{
//     name: string,
//     panCard: string,
//     address?: string,
// }
// let userData: Person = {
//     name: "Vamshi",
//     panCard: "VAMSHI101",
//     // address:"Bangalore"
// }
// console.log(userData)


//? Differnece between type alias and interface
// interface User {
//     username: string;
// }
// interface User{
//     password:string
// }

// interface User{
//     address:string
// }
// let person: User={
//     username: "praju",
//     password: "1234",
//     address:"Bangalore"
// }

// console.log(person)

//? using tuple
// type User = {
//     username: string,
// }
// type User = {                        //? Duplicat identifier of user
//     password:string
// }

//? example 5 Interface with extends keyword

// interface Rectangle{
//     height: number,
//     width: number,
// }
// interface colorRectangle extends Rectangle{
//     color:string
// }

// let resultRectangle: colorRectangle = {
//     height: 10,
//     width: 20,
//     color: "green",
// }
// console.log(resultRectangle)

//?example 6

// interface Car{
//     carName: string,
//     yearOfReg: number,
//     fuel:string,
// }
// interface CarDetails extends Car{
//     color: string,
//     price: string,
//     isManual?: boolean;
//     isAutomatic?:boolean
// }

// let RangeRover: CarDetails = {
//     carName: "X90",
//     yearOfReg: 2024,
//     fuel: "petrol",
//     color: "black",
//     price: "1 Cr",
//     isAutomatic:true,

// }
// console.log(RangeRover)


// ! OOP in typescript

//? Classes

// syntax of typescript classes
// class className{
// data members
// class variables
// }

//? example 1

// class Person{
//     name: string;
//     age: number;
// }
// let result = new Person()
// console.log(result)
// console.log(typeof result)

// result.name = "Prajwal";
// result.age = 25;
// console.log(result);

// Person[name] = "Kishor";
// console.log(result)

//? functions
// function Person() {
//     let name;
//     let age;
// }
// let result = new Person();
// console.log(result)
// console.log(typeof result)


//? example

// class EmpDetails{
//     username: string;
//     age: number;
//     role: string;
//     details() {
//         console.log(`My name is ${this.username} and iam ${this.age} years old and iam a ${this.role}`)
//     }
// }
// let Emp1 = new EmpDetails()
// Emp1.username = "kishore"
// Emp1.age = 25;
// Emp1.role = "admin"
// console.log(Emp1)
// Emp1.details();

//! Constructor

// class Person{
//     name: string;
//     age: number;
//     constructor() {
//         console.log("Hey Iam a constructor")
//     }
// }
// let user = new Person()
// console.log(user)

// class Data{
//     name: string;
//     age: number;
//     constructor(arg1: string, arg2: number) {
//         console.log("Hey iam a constructor");
//         this.name = arg1;
//         this.age=arg2
//     }
// }
// let user1 = new Data("prajwal", 25);
// console.log(user1)

// let user2 = new Data("Vamshi", 23);
// console.log(user2)

//? example 2

// class Data{
//     name: string;
//     age: number;
//     constructor(arg1: string, arg2: number) {
//         console.log("Hey iam a constructor");
//         this.name = arg1;
//         this.age=arg2
//     }
//     getDetails() {
//         console.log(`Hello People , My name is ${this.name} and iam ${this.age} years old`)
//     }
// }
// let user1 = new Data("Prajwal", 25);
// let user2 = new Data("Vamshi", 23);
// let user3 = new Data("Dharma", 28);

// // console.log(user1);
// user1.getDetails();
// user2.getDetails();
// user3.getDetails()


//! Inheritance

//? syntax
// class childClassName extends ParentClassName{

// }

//? example
// class Person{
//     fName: string;
//     lName: string;
//     constructor( fName:string,lName:string) {
//         this.fName = fName;
//         this.lName=lName
//     }
// }
// class EmpDetails extends Person{
//     age: number;
//     gender: string;
//     constructor(age: number, gender: string,fName:string,lName:string) {
//         super(fName, lName);
//         this.age = age;
//         this.gender = gender;
//     }
//     getFullName() {
//         console.log(`My name is ${this.fName} ${this.lName},Iam ${this.age} years old, Iam a ${this.gender}`)
//     }
// }

// let emp1 = new EmpDetails(23, "male", "saketh", "jspiders")
// console.log(emp1)
// emp1.getFullName();

//? example

// class RBIBank{
//     ROI: number = 7;
//     roi() {
//         return this.ROI;
//     }
// }
// class SBI extends RBIBank{
//     roi(){
//         return this.ROI + 2;
//     }
// }
// class ICICI extends RBIBank{
//     roi() {
//         return this.ROI+3.5
//     }
// }
// class AXIS extends RBIBank{
//     roi() {
//         return this.ROI+1.5
//     }
// }

// let sbiBank = new SBI();
// let iciciBank = new ICICI()
// let axisBank=new AXIS()

// console.log("SBI bank home loan interest charge is :" + sbiBank.roi());
// console.log("ICICI bank home loan interest charge is :" + iciciBank.roi());
// console.log("AXIS bank home loan interest charge is :" + axisBank.roi());

//! Access Modifiers

// class User{
//     protected username: string;
//     private age: number;
//     constructor(username: string, age: number) {
//         this.username = username;
//         this.age = age;
//     }
//     updateUsername() {
//         return this.username="shashi"
//     }
// }
// class Employee extends User{
//     private salary: number;
//     public city: string;
//     constructor(username: string, age: number, salay: number, city: string,) {
//         super(username, age);
//         this.salary = salay;
//         this.city=city
//     }
// }

// class QSP extends Employee{
//     private edu: string;
//     private skills: string[];
//     constructor(username, age, salary, city, edu, skills) {
//         super(username, age, salary, city);
//         this.edu = edu;
//         this.skills=skills
//     }
//     // updateUsername(){
//     //     this.username="shashi"
//     // }
// }

// let user1 = new QSP("manu", 25, 60000, "bangalore", "BTech", ["Javascript", "Typescript", "Reactjs", "Angular"])

// console.log(user1);
// user1.updateUsername()
// console.log(user1)

// user1.age = 30;     // Property 'age' is private and only accessible within class 'User'.
// user1.username = "praju"  //Property 'username' is protected and only accessible within class 'User' and its subclasses.

// user1.city = "mysore"
// console.log(user1)

// console.log(user1.updateUsername())



// let Emp1 = new Employee("manu", 20, 60000, "bangalore")
// console.log(Emp1)

// Emp1.username = "shashi"

//! Abstract class

// abstract class Animal{
//     abstract makeSound();
//     move() {
//         console.log("Bow Bow");
//     }
// }
// // let demo =new Animal();     ///?  Cannot create an instance of an abstract class

// class Cat extends Animal{
//     makeSound() {
//         console.log("meow meow")
//     }
// }

// let catAnimal = new Cat();
// catAnimal.makeSound();
// catAnimal.move()

//! Generics
// function logAndReturn(value: number | string) {
//     // console.log(value)
//     return value
// }

// let numResult = logAndReturn(42);
// console.log(numResult)

// let strResult = logAndReturn("hello generics")
// console.log(strResult)

//? using generics

//? example 1

// function logAndReturn<jsp>(value:jsp) {
//     // console.log(value)
//     return value
// }

// let numResult = logAndReturn<number>(42);
// console.log(numResult)

// let strResult = logAndReturn<string>("hello generics")
// console.log(strResult)

// let bolResult = logAndReturn<boolean>(true);
// console.log(bolResult)

//? example 2
// function Demo<T>(a: T, b: T) {
//     return { a, b };
// }
// let num = Demo<number>(10, 20);
// console.log(num)

// let str = Demo<string>("good", "evening")
// console.log(str)

//! Decorators

// function Logger(target: Function) {
//     console.log("Loading....");
//     target();
// }

// @Logger
// class User{
//     name: string = "John";
//     age: number = 26;
//     constructor() {
//         console.log("Iam a constructor")
//     }
// }
// let demo = new User()

//? example 2
// function LogDecorators(msg: string) {
//     function Logger(user: Function) {
//         console.log("Loading...")
//         user();
//     }
//     return Logger
// }

// @LogDecorators("Hello people iam a decorator")
// class User{
//     name: string = "John";
//     age: number = 26;
//     constructor() {
//         console.log("Iam a constructor")
//     }
// }

//? getters and setters

// class Person{
//      private username: string;
//     get getUsername() {
//         return `My name is ${this.username}`
//     }
//     set setUsername(name) {
//         this.username=name
//     }
// }
// let user = new Person()
// user.setUsername = "manu";
// console.log(user.getUsername)
// console.log(user)

// Note
// 1. if get exists but no set property is automatically readonly
// 2.if the type of the setters parameter is not specified it is infered from the return type of the getter
// 3.getters and setters are require an  member visibility

// class Person {
//     age: number;
//     get GetAge() {
//         return `iam ${this.age} years old`
//     }
//     set SetAge(age: number) {
//         if (age > 20 && age < 120) {
//             this.age = age;
//         } else {
//             throw new Error("Invalid Input")
//         }
//     }
// }
// let demo = new Person();
// demo.SetAge = 25;
// console.log(demo)

//? example 3
// function Template(eleId: string) {
//     return function (target: any) {
//         let user  = new target();
//         let container = document.getElementById(eleId);
//         console.log(container)
//         if (container) {
//             let h2 = container.querySelector("h2");
//             if (h2) {
//                 h2.textContent="Hello Mr." +user.name
//             }
//         }
//     }
// }
// @Template("mainDiv")
// class User{
//     name: string = "John";
//     age: number = 23;

//     constructor() {
//         console.log("User class constructor called")
//     }
// }


//?  we can restrict the return type also in typescript
// function Demo(name: string): number{
//     let value = name + Number(10);
//     return value
// }
// let data = Demo("prajwal")
// console.log(data)

//? more example on restrication on return type

//? function return type using type annotation with number

// function AddNumbers(num1: number, num2: number): number {
//     return num1 + num2
// }

// let result = AddNumbers(100, 100)
// console.log(result);                    //? 200
// console.log(typeof result);             //? number



//function return type using type annotation with boolean

// function PendingVal(isRole: string): boolean {
//     if (isRole === "admin") {
//         return true
//     }
//     else {
//         return false
//     }
// }
// let result = PendingVal("sashi")
// console.log(result);                //? false
// console.log(typeof result);         //? boolean

//? return type with string

// function Employee(firstName:string,lastName:string):string
// {
//     return firstName + lastName
// }
// let Emp1=Employee("Prajwal","shekar")
// console.log(Emp1);


//? function with objects with returning objects

// let empName=(user:{firstName:string,lastName:string}):object=>{
//     return user
// }
// let result=empName({firstName:"prajwal",lastName:"shekar"})
// console.log(result);


//? simple calculator with return type number

// type Calculator=(x:number,y:number)=>number

// let sum:Calculator=(x,y)=>x+y
// let mul:Calculator=(x,y)=>x*y

// console.log(sum(100,200));
// console.log(mul(10,20));

//! =============================== THANK YOU ==========================================