$(document).ready(function() {
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (!firebaseUser) {
			document.getElementById("form-container").innerHTML = "<p class='unauthorized-msg'>You are not signed in. </p>";
		} else {
			let database = firebase.database();
			let usersRef = database.ref('USERS');
			usersRef.on('value', (data) => {
				let match = false;
				let Users = data.val();
				let keys = Object.keys(Users);
				for (let i = 0; i < keys.length; i++) {

					let k = keys[i];

					let EMAIL = Users[k].EMAIL;
					let TYPE = Users[k].TYPE;
					if (EMAIL === firebaseUser.email && TYPE === "owner") {
						match = true;
					}
				}

				if (!match) {
					document.getElementById("form-container").innerHTML = "<p class='unauthorized-msg'>You are not authorized to access this page. </p>";
				}
			});
		}
	});
});