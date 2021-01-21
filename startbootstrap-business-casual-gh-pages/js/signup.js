const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtPassword2 = document.getElementById('txtPassword2');
const btnSignup = document.getElementById('btnSignup');

btnSignup.addEventListener('click', e => {
    // Get Email and Password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const password2 = txtPassword2.value;
    const auth = firebase.auth();

    // Sign Up
    if (email != null && email != "" && password != null && password != "") {
        if (password === password2) {
            auth.createUserWithEmailAndPassword(email,
                password)
                .then((result) => {
                    //Add User to DB
                    addUserToDB(getUsernameByEmail(email), email);
                    goodMsg("signup-alert", "Sign-Up Successful! You will be redirected momentarily.");
                })
                .catch(e => {
                    msg("signup-alert", e.message)
                    console.error(e);
                });
        } else {
            msg("signup-alert", "Passwords do not match.");
        }
    }
    return false;
});