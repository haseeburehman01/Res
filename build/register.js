// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from './config.js'


// GET HTML ELEMENT IN JAVASCRIPT
let fullName = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')
let checkbox = document.querySelector('#checkbox')

// PASSWORD VISIBILITY FUNCTION
function myInput() {
    let x = document.querySelector('#password')
    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

checkbox.addEventListener('click', myInput)


// SEND REGISTER DATA LOCALSTORAGE


// REGISTOR DATA CONTROL
form.addEventListener('submit', event => {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            window.location = 'index.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

        email.value = ''
        password.value = ''
})





































// if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
//     userRegister.push({
//         name: fullName.value,
//         password: password.value,
//         email: email.value
//     })
//     console.log(userRegister);
//     pushData()
//     alert('Register succesfull')
//     // window.location = 'index.html'
// }else if(getData.map(item => {
//     return item.email === email.value
// })){
//     alert('this is email is already register')
// }else {
//     alert('Password 8 and 15 characters, including at least one special character, one number, and one uppercase letter:')
// }