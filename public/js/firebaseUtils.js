//document.addEventListener("DOMContentLoaded", () => {
(function($) {
    //Connect to firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBTB84wnQuIgr2-WM86B1kqH8SYiw93ln8",
        authDomain: "cafe-d429d.firebaseapp.com",
        databaseURL: "https://cafe-d429d.firebaseio.com",
        projectId: "cafe-d429d",
        storageBucket: "cafe-d429d.appspot.com",
        messagingSenderId: "1085151789851",
        appId: "1:1085151789851:web:574ad8c5fc61a2297709be",
        measurementId: "G-4XM5XBRQF0"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    //Check to see whether the student is logged in or not
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            var username = getUsername(firebaseUser);
            console.log(`${firebaseUser ? `- User signed in: ${firebaseUser.email} => ${username}` : "No User Signed in"}`);
        } else {
            console.log("No user signed in");
        }
    });
})(jQuery);

function signout() {
    alert("Are you sure you want to sign out?");
    firebase.auth().signOut();
    window.location.href = "index.html";
    return false;
}

function databaseWriteObject(path, object) {
    firebase.database().ref(path).update(object);
}

function databasePushObject(path, object) {
    firebase.database().ref(path).push(object);
}

function getUser(firebaseUser) {
    var userType = "";
    var table = "USERS";
    var username = getUsername(firebaseUser);
    var dbQuery = `${table}/${username}`;

    const user = firebase.database().ref(dbQuery);
    user.on('value', snap => {
        var userData = snap.val()
        if (userData) {
            return userData;
        } else {
            return "";
        }
    });
}

function getUsername(firebaseUser) {
    var email = firebaseUser.email;
    var user = "";
    var atSign = false;
    var index = 0;
    for (let i = 0; i < email.length && atSign == false; i++) {
        if (atSign == false) {
            if (email.charAt(i) !== '@') {
                index++;
            } else if (email.charAt(i) == '@') {
                atSign = true;
            }
        }
    }

    user = email.substring(0, index);

    return user;
}

function getUsernameByEmail(email) {
    var user = "";
    var atSign = false;
    var index = 0;
    for (let i = 0; i < email.length && atSign == false; i++) {
        if (atSign == false) {
            if (email.charAt(i) !== '@') {
                index++;
            } else if (email.charAt(i) == '@') {
                atSign = true;
            }
        }
    }
    user = email.substring(0, index);
    return user;
}

/*
function dynamicNavbar() {
	console.log("test 1");
	var navbar_account = document.getElementById("nav-account");
	navbar_account.innerHTML = "<a href='OwnerPortal.html' class='nav-link'>Portal</a>" +
		"<div id='navDropdown' class='dropdown'>" +
		"<a class='nav-link js-scroll-trigger' href='javascript:void(0);' onclick='signout();'>Sign-Out</a>" +
		"</div>";
}


function dynamicNavbar(firebaseUser) {
    var navbar_account = document.getElementById("nav-account");
    if (firebaseUser) {
        navbar_account.innerHTML = "<a href='OwnerPortal.html' class='nav-link js-scroll-trigger dropdown-link'>Portal</a>" +
            "<div id='navDropdown' class='dropdown-content'>" +
            "<a class='nav-link js-scroll-trigger' href='javascript:void(0);' onclick='signout();'>Sign-Out</a>" +
            "</div>";
    } else {
        navbar_account.innerHTML = `<a id="signin-nav-link" href="Signin.html" class="nav-link js-scroll-trigger dropdown-link">Sign-In</a>` +
            `<div id="signin-nav-dropdown" class="dropdown-content">` +
            `<a class="nav-link js-scroll-trigger" href="Signup.html">Sign-Up</a>` +
            `</div>`;
    }
}*/

function addUserToDB(username, email) {
    var table = `USERS/${username}`;
    var object = {
        "USERNAME": `${username}`,
        "TYPE": "tenant",
        "EMAIL": `${email}`,
    }
    databaseWriteObject(table, object);
}

/*function addOwnerUserToDB(username, email) {
    var table = `USERS/${username}`;
    var object = {
        "USERNAME": `${username}`,
        "TYPE": "owner",
        "EMAIL": `${email}`
    }
    databaseWriteObject(table, object);
}

function addAdminUserToDB(username, email) {
    var table = `USERS/${username}`;
    var object = {
        "USERNAME": `${username}`,
        "TYPE": "admin",
        "EMAIL": `${email}`
    }
    databaseWriteObject(table, object);
}*/

async function queryDB(table, key, value) {
    var db = firebase.database()
    var ref = db.ref(`${table}`);
    return ref.orderByChild(`${key}`).equalTo(value).once("child_added").then((snapshot) => {
        return snapshot.val();
    });
}

async function queryDBKey(table, key, value) {
    var db = firebase.database()
    var ref = db.ref(`${table}`);
    return ref.orderByChild(`${key}`).equalTo(value).once("child_added").then((snapshot) => {
        return snapshot.key;
    });
}

function goodMsg(elem, msgTxt) {
    msg(elem, msgTxt);
    document.getElementById(elem).className = "alert";
    setTimeout(() => {
        window.location.replace("index.html");
    }, 3000);
}

function msg(elem, msgTxt) {
    console.log(msgTxt);
    document.getElementById(elem).innerHTML = msgTxt;
    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 10000);
}


