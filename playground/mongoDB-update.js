const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
      return console.log("Connection Failed");
    }
    console.log('Connected to MongoDb server');

    db.collection('Users').findOneAndUpdate({
        name : 'Sai Kumar'
    },
    {
        $inc:{
            age:1
        },
        $set:{
            name : 'Sai kumar rao'
        }
    },
    {
        returnOriginal : false
    }
    ).then((result)=>{
        console.log(result);
    });
    db.close();
});