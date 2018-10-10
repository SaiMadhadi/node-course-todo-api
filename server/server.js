const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text : {
        type : String,
        require : true,
        trim : true,
        minlength : 1        
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
});

var t = new Todo({
    text : 'Dinner',
    completed : false,
    completedAt : 123
});

t.save().then((doc)=>{
    console.log(doc);
},(err) =>{
    console.log('Todo Not saved');
});