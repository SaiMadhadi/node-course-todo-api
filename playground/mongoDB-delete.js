const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
      return console.log("Connection Failed");
    }
    console.log('Connected to MongoDb server');
    // //deleteOne
    // db.collection("Todos").deleteOne({text : 'walk the dark'}).then((result) => {
    //   console.log(result);
    // });
    // //deleteMany
    // db.collection("Todos").deleteMany({text : 'Something to do'}).then((result) => {
    //  console.log(result);
    // });
    //findOneAnddelete
    db.collection("Todos").findOneAndDelete({text : 'Something to do'}).then((result) => {
        console.log(result);
    });
    db.close();
});