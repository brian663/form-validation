const form=document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const popUp = document.querySelector('.popUp');
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    let isValid = true;
    if (username === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    }
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    }

    if (!email.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    if (!password.match(passwordPattern)) {
        passwordError.textContent = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
        isValid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }
    if (isValid) {
        popUp.style.display = 'block';
        form.reset();
    }

});
const popUp = document.querySelector('.popUp');
const closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', () => {
    popUp.style.display = 'none';
});

const passwordFields = document.querySelectorAll('input[type="password"]');
passwordFields.forEach(field => {
    const eyeIcon = field.nextElementSibling;
    eyeIcon.addEventListener('click', () => {
        if (field.type === 'password') {
            field.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            field.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    });
}); 