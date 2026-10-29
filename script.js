const signup = document.querySelector('.form-signup');
const signin = document.querySelector('.form-signin');
const elementButton = document.querySelectorAll('.submit-data');

function switchTo(target) {
    const toSignup = target === 'signup';
    signup.classList.toggle('is-active', toSignup);
    signin.classList.toggle('is-active', !toSignup);
    if (signup.tagName === 'FORM') signup.reset();
    if (signin.tagName === 'FORM') signin.reset();
}


document.querySelectorAll('[data-switch]').forEach((btn) => {
    btn.addEventListener('click', () => {
        switchTo(btn.dataset.switch);
    });
});