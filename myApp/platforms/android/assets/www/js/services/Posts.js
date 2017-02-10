angular.module('app.services')
.factory('Posts', function ($q) {
    var posts = [
        {
            id: 0,
            user: {
                id: 1,
                username: "dtrump",
                profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
            },
            image: "img/donald-trump-grow-up.jpg",
            imageThumbnail: "img/donald-trump-grow-up.jpg",
            likes: 892,
            caption: "Let\'s make' #Murica great again",
            tags: ['Murica'],
            comments: [
                {
                    id: 0,
                    user: {
                        id: 2,
                        username: "SOme dude on the Internet"
                    },
                    comment: "Good luck on that @dtrump",
                    userRefs: ["@dtrump"],
                    tags: []
                },
                {
                    id: 1,
                    user: {
                        id: 3,
                        username: "Someguy on the Internet"
                    },
                    comment: "#Feelbadman",
                    userRefs: [],
                    tags: ["#Feelbadman"]
                },
            ]

        },
        {
            id: 1,
            user: {
                id: 4,
                username: "dvilla",
                profileImageSmall: "img/David-Villa-Family-Pictures-Wife-Son-Daughter-Height-Age.jpg"
            },
            image: "img/David-Villa-Family-Pictures-Wife-Son-Daughter-Height-Age.jpg",
            imageThumbnail: "img/David-Villa-Family-Pictures-Wife-Son-Daughter-Height-Age.jpg",
            likes: 1,
            caption: "Always #forward",
            tags: ['foward'],
            comments: [
                {
                    id: 0,
                    user: {
                        id: 3,
                        username: "Andrea Pirlo"
                    },
                    comment: "Ok",
                    userRefs: [],
                    tags: []
                }
            ]
        }
    ]

    return {
        all: function() {
            return posts;
        },
        add: function(newData) {
            posts.push(newData);
        },
        // posts from myself and the from the users i am following
        following: function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        },
        // most recent posts 
        recent: function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        },
        // search posts based on tags
        searchTag: function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        },
        //get all comments in a post
        get: function (postID) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id === parseInt(postID)) {
                    return posts[i];
                }
            }
        },
        // get all posts of single user
        getUserPosts: function (userId) {
            return $q(function (resolve, reject) {

                // execute the search and return results

                resolve(posts); // placeholder
            });
        }
    };
});