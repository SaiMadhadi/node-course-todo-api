const MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
      return console.log("Connection Failed");
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').find({text : "walk the dark"}).toArray().then((docs) => {
        console.log(docs);
    }, (err) => {
        console.log('Error Occured:',err);
    });
    db.close();
});