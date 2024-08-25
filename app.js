document.getElementById('myForm').addEventListener('input',function(){
    validateForm();
});

function validateForm(){
    
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmed = document.getElementById('confirmed');
const submitButton = document.getElementById('submitButton');
const passwordErrorElement = document.getElementById('passwordError')
const confirmErrorElement = document.getElementById('confirmError');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber');

let isValid = true;

if(!firstName.value || !lastName.value || !phone.value || !email.value || !password.value || !confirmed.value)
{
    isValid = false;
}

if(password.validity.patternMismatch || !password.value)
{
    passwordErrorElement.textContent = 'Password not OK';
    passwordErrorElement.classList.remove('success');
    passwordErrorElement.classList.add('error');
    isValid = false;
}
else{
    passwordErrorElement.textContent = 'Password OK';
    passwordErrorElement.classList.remove('error');
    passwordErrorElement.classList.add('success');
}

if(confirmed.value !== password.value)
{
    confirmErrorElement.textContent = 'Passwords do not match';
    confirmErrorElement.classList.remove('success');
    confirmErrorElement.classList.add('error');
    isValid = false;
}
else if(confirmed.validity.patternMismatch || !confirmed.value)
{
    confirmErrorElement.textContent = 'Password not OK';
    confirmErrorElement.classList.remove('success');
    confirmErrorElement.classList.add('error');
    isValid = false;
}
else{
    confirmErrorElement.textContent = 'Passwords match';
    confirmErrorElement.classList.remove('error');
    confirmErrorElement.classList.add('success');
}

if(isValid){
    submitButton.classList.add('enabled');
    submitButton.disabled = false;
}
else{
    submitButton.classList.remove('enabled');
    submitButton.disabled = true;
}

};