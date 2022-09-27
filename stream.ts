// // import express from 'express'
// import {createReadStream, createWriteStream} from 'fs'
// import {createReadStream, createWriteStream} from 'fs'

// //types of stream
// //1.readable
// const readMyStream = createReadStream(__dirname + "/readme.txt", "utf8")
// //"utf8 will show an understandable read file"

// //2.Writeable
// const writeMyStream = createWriteStream(__dirname + "/mywrite.txt");

// readMyStream.on("data", (chunk)=>{
//     console.log("New chunk received");
//     console.log(chunk);
//     // writeMyStream.write("Hello again??!!!")
//     writeMyStream.write(chunk)  
// });

// //3.Duplex
// //pipe
// const writeStream = createWriteStream(__dirname + "/file.txt")

// //process.standardin
// process.stdin.pipe(writeStream);
// process.stdin.pipe(writeMyStream);


// // console.log(process.versions)


//CONSOLE: 
//1_standout is a method of printing out message or getting a response on the console; terminal.. e.g console.log("Hello world")
//2_standin is a method of inputing or writing request into the console..
//3_standerror is used to run error on the console..

//Types: 1. Global Console: normal console used in javascript;
//2.Class Console: Is a nodejs console that has a lot of method in it; to make use of it you have to import the console from console; i.e import {Console} from "console"
//To make use of the class console you have to create a variable..

// import {Console} from "console"
// const logger = new Console(process.stdout, process.stderr)
// //by default, the console returns the stdout and stderr process
// //In the class console, you can make use of the console.log()
// logger.log("Hello world");
// // logger.log(new Error("whooping error"))
// // logger.error(new Error("whooping error"))

// //trace function shows where the error is coming from
// // logger.trace("problem")

// //TABLE
// //console.table() is used to arrange  objects of an array data types in nodejs into a table format.. 
// type Student = {
//     name: string,
//     age: number
// }[];

// const myStudent: Student = [
//     {
//         name: "Cynthia",
//         age: 19
//     },
//     {
//         name: "Osazie",
//         age: 18
//     },
//     {
//         name: "Esther",
//         age: 22
//     },
//     {
//         name: "Feyikemi",
//         age: 1
//     },
// ]
// const maleStudent: Student = [
//     {
//         name: "David",
//         age: 19
//     },
//     {
//         name: "Emmanuel",
//         age: 18
//     },
//     {
//         name: "Gideon",
//         age: 22
//     },
//     {
//         name: "Jalingo",
//         age: 1
//     },
// ]

// console.table(myStudent);
// console.table(maleStudent);

//TIME
//the console.time() calculates the time it takes to run a function e.g the big O notation;
//used to know the start time
// logger.time()
// for (let index = 0; index < 100; index++) {
//     console.log("Hello")
// };
// logger.timeEnd()
//timeEnd() to calculate the time it ends to run through; how long it took to run through: console.timeend()
//timeLog() runs as the timeend();


//ASSERT: returns true or false;
// logger.assert(true, "hello world")
// logger.assert(false, "hello world")



//process.env: process dot entervariable...


//DNS: Domain Name Sysytem.,
// import dns from 'dns';
// const hostname: string = "myservices.netlify.app"
// // const hostname: string = "google.com"
// //lookup() coberts the domain name to the ip address specifically ipv4 (to readable numbers for the machine)..
// dns.lookup(hostname, function(err, address, family){
//     if(err){
//         console.log("Wrong input");
//         return;
//     };
//     console.log("Address:", address)
//     console.log("family:", family)
// })
// //resolve for ipv4
// dns.resolve(hostname, function(err, address){
//     if(err){
//         console.log("Wrong input v4");
//         return;
//     };
//     console.log("ipv4 Address:", address)
// })
// //resolve6 for ipv6
// dns.resolve6(hostname, function(err, address){
//     if(err){
//         console.log("Wrong input v6");
//         return;
//     };
//     console.log("ipv6 Address:", address)
// })
// console.log(dns)