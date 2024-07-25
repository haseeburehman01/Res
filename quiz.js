// Import the functions you need from the SDKs you need
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);

    } else {
        console.log('user login nahi ha');
        window.location = 'index.html'
    }
});

let logoutBtn = document.querySelector('#logoutBtn')

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('Sign-out successful.')
    }).catch((error) => {
        alert('An error happened.')
    });
})

const questions = [
    {
        question: "What is TypeScript?",
        options: ["A programming language", "A superset of JavaScript", "A web browser", "A type of database"],
        answer: "A superset of JavaScript"
    },
    {
        question: "How do you define a variable in TypeScript?",
        options: ["var name: string", "let name: string", "var name = 'John'", "let name = 123"],
        answer: "let name: string"
    },
    {
        question: "What is the file extension for TypeScript files?",
        options: [".js", ".ts", ".tsx", ".tsp"],
        answer: ".ts"
    },
    {
        question: "How do you specify the type of a function's parameter in TypeScript?",
        options: ["function foo(param)", "function foo(param: type)", "function foo(param = type)", "function foo: type"],
        answer: "function foo(param: type)"
    },
    {
        question: "What is a tuple in TypeScript?",
        options: [
            "A function",
            "An array with a fixed number of elements",
            "A class",
            "A decorator"
        ],
        answer: "An array with a fixed number of elements"
    },
    {
        question: "Which TypeScript feature allows for checking the types of variables?",
        options: ["Type inference", "Type checking", "Type coercion", "Type generation"],
        answer: "Type checking"
    },
    {
        question: "How can you compile TypeScript to JavaScript?",
        options: ["Using Node.js", "Using a browser", "Using the TypeScript compiler (tsc)", "Using Babel"],
        answer: "Using the TypeScript compiler (tsc)"
    },
    {
        question: "What is an interface in TypeScript?",
        options: ["A way to define the structure of an object", "A type of loop", "A function parameter", "A data type"],
        answer: "A way to define the structure of an object"
    },
    {
        question: "Can TypeScript code run directly in the browser?",
        options: ["Yes", "No", "Only with special plugins", "Only in modern browsers"],
        answer: "No"
    },
    {
        question: "How do you declare a read-only property in TypeScript?",
        options: ["use 'readonly' keyword", "use 'constant' keyword", "use 'immutable' keyword", "use 'static' keyword"],
        answer: "use 'readonly' keyword"
    },
    {
        question: "What is the purpose of the 'never' type in TypeScript?",
        options: [
            "To indicate a value that can never occur",
            "To define a variable with any type",
            "To represent a type that is unknown",
            "To create an alias for another type"
        ],
        answer: "To indicate a value that can never occur"
    },
    {
        question: "What does the '?' symbol indicate when used in a TypeScript type?",
        options: ["A required property", "A method", "An optional property", "A constructor"],
        answer: "An optional property"
    },
    {
        question: "How do you specify a default parameter value in TypeScript?",
        options: [
            "function foo(param?: type)",
            "function foo(param: type = defaultValue)",
            "function foo(param: defaultValue)",
            "function foo(param: type, defaultValue)"
        ],
        answer: "function foo(param: type = defaultValue)"
    },
    {
        question: "What is the purpose of the 'as' keyword in TypeScript?",
        options: [
            "To rename a variable",
            "To assert a variable's type",
            "To create a class",
            "To define a function"
        ],
        answer: "To assert a variable's type"
    },
    {
        question: "What does 'strictNullChecks' in TypeScript do?",
        options: [
            "Allows null and undefined in all types",
            "Prevents assigning null or undefined to a variable unless explicitly allowed",
            "Enables implicit any type",
            "Disables type checking"
        ],
        answer: "Prevents assigning null or undefined to a variable unless explicitly allowed"
    },
    {
        question: "How do you make a class member accessible only within its class in TypeScript?",
        options: ["Use the 'private' keyword", "Use the 'public' keyword", "Use the 'protected' keyword", "Use the 'static' keyword"],
        answer: "Use the 'private' keyword"
    },
    {
        question: "What is a union type in TypeScript?",
        options: ["A combination of types that can be used interchangeably", "A special syntax for creating classes", "A decorator type", "A reserved keyword"],
        answer: "A combination of types that can be used interchangeably"
    },
    {
        question: "What is the purpose of 'type aliases' in TypeScript?",
        options: ["To create a new variable", "To define a custom type", "To set default values", "To implement interfaces"],
        answer: "To define a custom type"
    },
    {
        question: "What does the 'extends' keyword do in TypeScript?",
        options: ["Defines a function", "Creates an array", "Indicates inheritance in classes", "Specifies a property type"],
        answer: "Indicates inheritance in classes"
    },
    {
        question: "How can you import a module in TypeScript?",
        options: ["use 'require()'", "use 'import'", "use 'include()'", "use 'module()'"],
        answer: "use 'import'"
    }
];

// GET HTML ELEMENT IN JAVASCRIPT
let Quiz_Question = document.querySelector('#Quiz_Question')
let next_btn = document.querySelector('#next_btn')
let label_div = document.querySelector('#label_div')

let currenIndex = 0
let rightAnswer = 0
let wrongAnswer = 0

let renderScreen = () => {
    label_div.innerHTML = ''
    let typescriptQuiz = questions[currenIndex].question
    // console.log(typescriptQuiz);
    Quiz_Question.innerHTML = `Q${currenIndex + 1}
    ${typescriptQuiz}
    `
    let option = questions[currenIndex].options
    option.map(item => {
        label_div.innerHTML += `
        <label class="bg-primary label_radio p-3">
            <input type="radio" name="${currenIndex}" value="${item}">
            <span>${item}</span>
          </label>
        `
    })
}
renderScreen()

next_btn.addEventListener('click', () => {
    let selected = document.querySelector(`input[name='${currenIndex}']:checked`)
    if (selected) {
        if (selected.value === questions[currenIndex].answer) {
            rightAnswer++
            // console.log(rightAnswer);
        } else {
            wrongAnswer++
            // console.log(wrongAnswer);
        }
    }

    currenIndex++
    renderScreen()
})















