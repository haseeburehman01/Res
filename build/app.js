// Import the functions you need from the SDKs you need
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

// google authentication
const provider = new GoogleAuthProvider();

// PASSWORD VISIBILITY FUNCTION
function myInput() {
    let x = document.querySelector('#password')
    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

// GET HTML ELEMENT IN JAVASCRIPT
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')
let checkbox = document.querySelector('#checkbox')
let login_btn = document.querySelector('#login_btn')

checkbox.addEventListener('click', myInput)

form.addEventListener('submit', event => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.location = 'quiz.html'
            email.value = ''
            password.value = ''
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})

login_btn.addEventListener('click', () => {
    console.log('google');

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            window.location = 'quiz.html'
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
            // ...
        });
})