import Users from "./Users";
// const Users = require("./Users")
const fs = require('fs'),
    nconf = require('nconf');
nconf.argv()
    .env()
    .file({file: './config.json'});

nconf.set('database:host', '127.0.0.1');
nconf.set('database:port', 5984);

console.log(Users)
console.log(Users.add({id: 1, nickname: "2"}))
console.log(Users.add({id: 2, nickname: "2"}))
console.log(Users.add({id: 3, nickname: "2"}))
console.log(Users.add({id: 4, nickname: "boroda"}))
console.log(Users.add({id: 5, nickname: "2"}))
console.log(Users.add({id: 6, nickname: "2"}))
console.log(Users.get(4))