const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
      return console.log("Connection Failed");
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed : false
    },(err,res) => {
        if(err){
            return console.log("Unable to insert");
        }
        console.log(JSON.stringify(res.ops,undefined,2));
    });
    db.close();

    // db.collection('Users').insertOne({
    //     name : "Sai Kumar",
    //     age : 21
    // },(err,res) => {
    //     if(err){
    //         return console.log("Unable to insert");
    //     }
    //     console.log(res.ops);
    // });
});

