angular.module('app.services', [])

.factory('Chats', function () {
    var chats = [{
        id: 0,
        name: 'Andrea Pirlo ',
        lastText: 'You on your way?',
        face: 'img/Andrea-Pirlo.jpg'
    }, {
        id: 1,
        name: 'Frank Lampard',
        lastText: 'Where have you been?',
        face: 'img/Lampard.jpg'
    }, {
        id: 2,
        name: 'Jack Harrison',
        lastText: 'You won\'s coming?',
        face: 'img/jack-harrison-nycfc_3400019.jpg'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})

.factory('Tops', function () {
    var tops = [{
        id: 1,
        name: 'Duck',
        description: 'nothing',
        face: 'img/ben.png'
    },
    {
        id: 2,
        name: 'Chicken',
        description: 'nothing else',
        face: 'img/mike.png'
    },
    {
        id: 3,
        name: 'Doge',
        description: 'nothing else matter',
        face: 'img/perry.png'
    }];
    return {
        all: function () {
            return tops;
        },
        get: function (chatId) {
            for (var i = 0; i < tops.length; i++) {
                if (tops[i].id === parseInt(topID)) {
                    return tops[i];
                }
            }
            return null;
        }
    };
})
.factory('People', function () {
    var people = [{
        id: 1,
        name: 'Cat',
        description: 'Meow',
        face: 'img/nehe.png'
    },
    {
        id: 2,
        name: 'Dog',
        description: 'Whoop Whoop',
        face: 'img/dog.jpg'
    },
    {
        id: 3,
        name: 'Doge',
        description: 'If you know what i mean',
        face: 'img/doge.jpeg'
    }];
    return {
        all: function () {
            return people;
        },
        get: function (personId) {
            for (var i = 0; i < people.length; i++) {
                if (people[i].id === parseInt(personID)) {
                    return people[i];
                }
            }
            return null;
        }
    };
})
.factory('Tags', function () {
    var hashtags = [{
        id: 1,
        name: '#abc',
    },
    {
        id: 2,
        name: '#xyz',
    },
    {
        id: 3,
        name: '#qwerty',
    }];
    return {
        all: function () {
            return hashtags;
        },
        get: function (hashtagId) {
            for (var i = 0; i < hashtags.length; i++) {
                if (hashtags[i].id === parseInt(hashtagId)) {
                    return hashtags[i];
                }
            }
            return null;
        }
    };
})
.factory('Places', function () {
    var places = [{
        id: 1,
        name: 'Highway',
        description: 'To hell'
    },
    {
        id: 2,
        name: 'Stairway',
        description: 'To heaven'
    }];
    return {
        all: function () {
            return places;
        },
        get: function (placeId) {
            for (var i = 0; i < places.length; i++) {
                if (places[i].id === parseInt(placeId)) {
                    return places[i];
                }
            }
            return null;
        }
    };
})
.factory('Friends', function () {
    var friends = [{
        id: 1,
        name: 'Guy No.1',
        description: 'started following you',
        face: 'img/ben.png'
    },
    {
        id: 2,
        name: 'Guy No.2',
        description: 'started following you',
        face: 'img/mike.png'
    },
    {
        id: 3,
        name: 'Guy No.3',
        description: 'started following you',
        face: 'img/perry.png'
    }];
    return {
        all: function () {
            return friends;
        },
        get: function (friendId) {
            for (var i = 0; i < friends.length; i++) {
                if (friends[i].id === parseInt(friendId)) {
                    return friends[i];
                }
            }
            return null;
        }
    };
})
.factory('PersonalInfo', function () {
    var Info = {
        id:111111,
        avatar: "img/welcome-to-internet.jpg",
        name: "Someguys",
        nickname: "Anonymous",
        website: "",
        bio: "",
        email: "whatever@doge.com",
        mobile: "217341",
        gender: "male",
        posts: "1",
        followers: "20",
        following: "100"
    };
    return {
        all: function () {
            return Info;
        }
    };
})
