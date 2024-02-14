const loginButtonBringForm = document.getElementById('login');
const signupButtonBringForm = document.getElementById('sign-up');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('Register');


loginButtonBringForm.addEventListener('click', function(){
    loginForm.classList.toggle('hidden');
});

signupButtonBringForm.addEventListener('click', function(){
    registerForm.classList.toggle('reg-hidden');

})



document.getElementById('Register').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            alert('Registration successful!');
        } else {
            console.error('Registration failed:', response.statusText);
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        alert('An error occurred while registering. Please try again later.');
    }
});
