const mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    name : {
        type : String
    },
    age : {
        type : Number,
    },
    id : {
        type : Number
    }
});

module.exports = {
    Users : Users
};