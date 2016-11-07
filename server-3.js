var mongoose = require('mongoose');
var assert = require('assert');
var Dishes = require('./models/Dishes');
var Leadership = require('./models/Leadership');
var Promotions = require('./models/Promotions');
// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
    // create a new dish
    Leadership.create({
        name: 'Leadership',
        image: 'www.google.com',
        designation: 'Jimmy',
        abbr: 'CEO',
        description: 'Test'
    }, function (err, ls) {
        if (err) throw err;
        console.log(ls);
        console.log('Leadership created!');
        db.collection('leaderships').drop();
    });

    Dishes.create({
        name: 'Uthapizza',
        description: 'Test',
        image: 'www.google.com',
        category: "mains",
        price: "4.99",
        comments: [
            {
                rating: 3,
                comment: 'This is insane',
                author: 'Matt Daemon'
            },
            {
                rating: 1,
                comment: 'Lit',
                author: 'Timmy'
            }
        ]
    }, function (err, dish) {
        if (err) throw err;
        console.log(dish);
        console.log('Dish created!');
        db.collection('dishes').drop();
    });


    Promotions.create({
        name: 'Grand Opening Chinese Buffet',
        description: 'Test',
        image: 'www.google.com',
        label: "New",
        price: "$222.225"
    }, function (err, promo) {
        if (err) throw err;
        console.log(promo);
        console.log('Promotion created!');
        db.collection('promotions').drop();
    });
});
