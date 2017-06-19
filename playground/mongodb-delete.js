// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: "lunch"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: "lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'jc'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5947d19d774ff405e9c9e193")}).then((result) => {
        console.log(result);
    });

    // db.close();
});
