const loginButtonBringForm = document.getElementById('login');
const loginForm = document.getElementById('login-form');

loginButtonBringForm.addEventListener('click', function(){
    loginForm.classList.toggle('hidden');
});

const signupButtonBringForm = document.getElementById('sign-up');
signupButtonBringForm.addEventListener('click', function(){
    loginForm.classList.toggle('hidden');
    
})