const mongoose = require("mongoose");
// var mongoose = require('mongodb').mongoose
// var url = "mongodb://localhost:27017/admissionSix";

mongoose.connect("mongodb://localhost:27017/admissionFinal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection sucessful');
}).catch((e) => {
    console.log(e);
})


// mongoose.connect(url, function(err, client) {
//     if (err) throw err;
//     // var db = client.db('admissionFive');
//     client.collection('Registers').findOne({}, function(findErr, result) {
//         if (findErr) throw findErr;
//         console.log(result);
//         client.close();
//     })
// });


// mongoose.connection.once('open', function() {
//     console.log('connection is made');
// }).on('error', function(error) {
//     console.log('error', error);
// });

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).then(() => {
//     console.log(`connection sucessful`);
// }).catch((e) => {
//     console.log(`no connection`);
// })