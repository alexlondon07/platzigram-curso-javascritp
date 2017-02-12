var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
    title('Platzigram');
    var main = document.getElementById('main-container');
    var pictures =[
        {
            user: {
                username: 'alexlondon07',
                avatar: 'https://scontent.feoh1-1.fna.fbcdn.net/v/t31.0-8/14853272_10211262828146142_5259747687663940265_o.jpg?oh=366e9489a6cdec1b2decd4092a9394fc&oe=5934E318',
            },
            url: 'office.jpg',
            likes: 200,
            liked: true
        },
        {
            user: {
                username: 'alexlondon07',
                avatar: 'https://scontent.feoh1-1.fna.fbcdn.net/v/t31.0-8/14853272_10211262828146142_5259747687663940265_o.jpg?oh=366e9489a6cdec1b2decd4092a9394fc&oe=5934E318',
            },
            url: 'office.jpg',
            likes: 3000,
            liked: true
        },
    ];
    
    empty(main).appendChild(template(pictures));
})