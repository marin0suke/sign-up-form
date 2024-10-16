
function checkPasswordsMatch() {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const passwordError = document.querySelector(".password-error");

    //reset if click submit
    password.style.borderColor = '#e1e1e1';
    confirmPassword.style.borderColor = '#e1e1e1';
    passwordError.style.display = 'none';

    if (password.value !== confirmPassword.value) {
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
        passwordError.style.display = 'block'; // error message comes up
        return false; 
    }
    return true;
}

function submitForm() {
    const form = document.querySelector("#sign-up-form");

    if (checkPasswordsMatch() && form.checkValidity()) {
        form.submit(); 
    } else {
        form.reportValidity(); 
    }
}

document.querySelector("#submit-button").addEventListener("click", submitForm);
