var database = [
    {
        username:"Om kumar",
        password:"supersecret"
    },
    {
        username:"Govind",
        password:"123"
    },
    {
        username:"Prateek",
        password:"frustrate"
    }
];

var newsfeed = [
    {
        username:"Bobby",
        timeline:"So tired from all that learning"
    },
    {
        username:"Sally",
        timeline:"Javascript is soooo cool!"
    },
    {
        username:"Mitch",
        timeline:"Javascript is pretty cool"
    }
    ];
    
    function isUserValid(username,password) {
        for(var i=0; i<database.length; i++) {
            if (database[i].username ===username && 
                database[i].password ==password) {
                    return true;
                } 
        }
        return false;
    }

    function signIn(username,password){
        if (isUserValid(username, password)) {
            console.log(newsfeed);
        } else {
            alert("sorry, wrong username and password?");

        }
    }

    var userNamePromt = prompt("what\'s your password?");
    var passwordPrompt = prompt("What\'s  your password");

    signIn(userNamePromt, passwordPrompt);