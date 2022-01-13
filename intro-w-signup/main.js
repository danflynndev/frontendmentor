window.onload = initPage;


const displayError = e => {
    const field = e.target;
    const fieldName = field.placeholder;
    
    if (!field.value) {
        const errorMsg = document.createElement('span');

        if (field.type == 'email') {
            errorMsg.innerText = `Looks like this is not an email`;
            field.placeholder = `email@example.com`;
            field.classList.add('email-red');
            
        } else {
            errorMsg.innerText = `${fieldName} cannot be empty`;
        }

        if (field.nextElementSibling.tagName != 'SPAN') field.after(errorMsg);

        field.style.borderColor = `var(--red)`;
        field.style.backgroundImage = `url('./images/icon-error.svg')`;
        
    }
}

const removeErrorStyling = e => {
    e.target.style.borderColor = `var(--grey-blue)`; // reset border color
    e.target.style.backgroundImage = `url()`; // remove error icon
    const next = e.target.nextElementSibling;
    if (next.tagName == 'SPAN') next.remove();
}

function initPage() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach( e => {
        e.addEventListener('blur', displayError);
        e.addEventListener('focus', removeErrorStyling)
    })
}