// console.log('hi potato');
// common js
// ES module
// const os  = require('os');

// (()=>{
//     var a =23;
//     var b =44;
// })()

// const test = require('./test.js')

// console.log(test);

// const test = (()=>{
//     let exports = {};
//     var a =23;
// var b =44;

// function abc() {
//     console.log("Hello World");
// }

// function xyz() {
//     console.log("Hello World");
// }

// exports.abc = abc;
// exports.xyz = xyz;

// return exports;
// })()

// const obj =(function (exports, require, module) {

//   var a =23;
//   var b =44;

// function abc() {
//     console.log("Hello World");
// }

// function xyz() {
//     console.log("Hello World");
// }

// exports.abc = abc;
// exports.xyz = xyz;

// // common js
// return exports;

// })({},{},{});

// obj.xyz()

// var a = 44

// test.xyz();
// millions of line of code

// default import
// import TEST from './test.js';
// named import
// import {xyz,a,b} from './test.js';
// import TestPotaot,{xyz,a,b} from './test.js';
// import ReactPotato,{useState} from 'react';

//
// import * as ALL from './test.js';

// ALL.default();

// console.log(ALL);

// TEST();

// code modules ! used to run code.

// os module

// import test1 from './coreOs.js';
import './coreFile.js'
// import potatoEmitter from './events.js';
import EventEmitter from 'events'
import { link, rmSync } from 'fs'

// emmiter

// const browserEventEmitter = new EventEmitter()

// const emailEmitter = new EventEmitter();
// const phoneEmitter = new EventEmitter();

// phoneEmitter.on()

// // 'click'
// emailEmitter.on('send', (data) => {
//     console.log('someone sent an email', data.name);
// });

// setTimeout(()=>{
//     emitter.emit('send', {name:"rahul"});
// },2000)

// li.addEventListener('click',()=>{})

// function addEventListener(type, callback) {
//   switch (type) {
//     case 'click':
//       browserEventEmitter.on('click', callback)
//   }
// }

// function mouseClick() {
//   browserEventEmitter.emit('click', { traget: 'rahul' })
// }

// const el = document.getElementById('button');
// el.addEventListener('click', (el) => {
//     el.target.value;
//     potatoEmitter.emit('potato', ' with data');
// });

// code for emmiter phone call example

// import readline from 'readline';

// import callEmitter from './phone/phone.js';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('do you wan to send email or phone call \n', (answer) => {
//   switch (answer) {
//     case "1":
//         // write a code to send email
//         break;
//     case "2":
//         callEmitter.emit('call');
//         // callEmitter.emit('potato');
//         break;
//     default:
//         console.log("invalid input");
//         break;
//   }
//   rl.close();
// });

// http module
import http from 'http'

const students = [
  { name: 'rahul', age: 26 },
  { name: 'Rohan', age: 24 },
  { name: 'ankur', age: 25 },
]

const server = http.createServer((req, res) => {
  if (req.url === '/api/v1/students') {
    if (req.method === 'GET') {
      res.statusCode = 200
      res.end(JSON.stringify({ data: students }))
    } else if (req.method === 'POST') {
     let body = '';
     req.on('data', chunk => {
      body += chunk.toString();
     });
     req.on('end', () => {
       const { name, age } = JSON.parse(body);
       students.push({ name, age });
       res.statusCode = 201
       res.end(JSON.stringify({ data: students }))
     });
    }
  }
  // res.statusCode = 200;
  // res.write("data from file1");

  // res.write("data from file2");

  // res.end();

  // // this will not work
  // res.write("data from file3");
})

server.listen(3000, () => {
  console.log('server started')
})
