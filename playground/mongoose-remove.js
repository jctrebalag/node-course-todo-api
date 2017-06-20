const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '59492910233c56f023448237'}).then((todo) => {
    
});

Todo.findByIdAndRemove('59492910233c56f023448237').then((todo) => {
    console.log(todo);
});
