const submitButton = document.querySelector('.submit'); 

document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const emailInp = e.target.elements.email.value.trim(); 
    const passInp = e.target.elements.password.value.trim(); 

    if (emailInp === '' || passInp === '') {
        alert('All form fields must be filled in');
    } else {
        const obj = {
            email: emailInp,
            password: passInp
        };

        console.log(obj); 

        e.target.reset(); 
    }
});








