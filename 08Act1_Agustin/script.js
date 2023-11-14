// loader fade in-out
window.onload = function() {
    const LOADER = document.querySelector(".container");

    LOADER.classList.add("container--hidden");

    LOADER.ontransitionend = function() {
        document.body.removeChild(LOADER);
        alert("Page loaded succesfully.");
    };
};

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 3000,
    delay: 3000
});

ScrollReveal().reveal('.login-popup', { origin: 'bottom'});

// sign-in || sign-up
const WRAPPER = document.querySelector('.wrapper');
const CLOSE = document.querySelector('.icon-close');
const REGISTER = document.querySelector('.register-link');
const LOGIN = document.querySelector('.login-link');

REGISTER.onclick = function() {
    WRAPPER.classList.add('active');
};

LOGIN.onclick = function() {
    WRAPPER.classList.remove('active');
};

// back to home page
function goBack() {
    window.open("https://www.google.com", '_self');
};

//capitalized email
function capitalEmail() {
    let email = document.getElementById("email");
    email.value = email.value.toUpperCase();
  }

// show hide password
function showHide() {
    let password = document.getElementById('password');
    let togglePassword = document.getElementById('toggle');

    if (password.type === 'password') {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
};

// log authentication
function auth() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = document.getElementById("username").value;

    if(email && password || user && email && password) {
        alert("Login Successfully. You will now be redirected to the lobby.");
        window.open("https://www.google.com");
    }

    else {
        alert("Missing information.");
        return;
    }
}