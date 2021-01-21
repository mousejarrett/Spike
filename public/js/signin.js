document.addEventListener("DOMContentLoaded", () => {
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnSignin = document.getElementById('btnSignin');

    btnSignin.addEventListener('click', e => {
        e.preventDefault();
        // Get Email and Password
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        // Sign in
        if (email != null && email != "" && password != null && password != "") {
            //firebase.auth().signOut();
            const promise = auth.signInWithEmailAndPassword(email,
                password);
            promise
                .then(() => {
                    goodMsg("signin-alert", "Sign-in Successful! You will be redirected momentarily.");
                })
                .catch(e => {
                    msg("signin-alert", e.message)
                    console.error(e);
                });
        }
    });
});