const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5948fe90c2ffed0c9ebffa91";

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = "59490d46233c56f023447c01";

User.findOne({
    _id: id
}).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User:', user);
}).catch((e) => console.log(e));
