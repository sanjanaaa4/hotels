var mongoose = require('mongoose'); 
var dbURI  = "mongodb://0.0.0.0:27017/HotelRoom"; 
mongoose.connect(dbURI); 
var gracefulShutdown;
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connection.on('connected', function () { 
    console.log('Mongoose connected to ' + dbURI); 
});

mongoose.connection.on('error', function (err) {
     console.log('Mongoose connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose disconnected'); 
}); 
require('./locations');

